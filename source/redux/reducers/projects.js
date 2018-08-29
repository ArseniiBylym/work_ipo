import { projects } from '../constants';
import _ from 'lodash';

function currentDateParams() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getDate();

  return {
    year,
    month,
    date,
  }
}

function createDateRanges() {
  const { year, month, date } = currentDateParams();

  // date ranges limits
  const resObj = [
    // space in names is need to splitting value; first letter refers to slot in array
    {
      name: '0 week',
      limit: new Date(year, month, date - 7),
      optionTitle: 'Last week',
    },
    {
      name: '1 month',
      limit: new Date(year, month - 1, date),
      optionTitle: 'Last month',
    },
    {
      name: '2 3-month',
      limit: new Date(year, month - 3, date),
      optionTitle: 'Last 3 month',
    },
    {
      name: '3 6-month',
      limit: new Date(year, month - 6, date),
      optionTitle: 'Last 6 month',
    },
  ];

  return resObj;
}

const ranges = createDateRanges();

const dateRanges = {
  maxDateRange: null,
  ranges,
  statFilter: ranges[0].name,
}

const initialState = {
  items: null,
  data: null,
  originalData: null,
  currentUnitValue: null,
  dateRanges,
  // visits: null,
  // amount: null,
  // subsrc: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case projects.changeStatFilter: {
      const { value } = action;
      const newState = _.cloneDeep(state);

      newState.dateRanges.statFilter = value;
      return newState;
    }

    case projects.listSuccess: {
      const newState = _.cloneDeep(state);

      newState.items = action.data;

      return newState;
    }

    case projects.checkFilter: {
      const newState = _.cloneDeep(state);
      const { statType } = action;
      let data;

      switch(statType) {
        case 'visits': {
          data = newState.stats.visits;
          break;
        }

        case 'amount': {
          data = newState.stats.amount;
          break;
        }

        case 'subscr': {
          data = newState.stats.subscr;
          break;
        }
      }

      newState.dateRanges.maxDateRange = (function() {
        const { ranges } = dateRanges;
        const firstDate = data.first();
        let res = 0;

        for(let i = 0; i < ranges.length; i++) {
          const rangeItem = ranges[i];

          if(rangeItem.limit > firstDate.date) {
            res = i;
          } else {
            break;
          }
        }

        return res;
      }());

      return newState;
    }

    case projects.singleSuccess: {
      const newState = _.cloneDeep(state);
      const { projectType } = action;
      let maxDateRange;
      let data;
      let amountData;
      let companyStats;

      newState.originalData = _.cloneDeep(action.data);
      // let data = action.data.purchases;
      // const daysRangeOfData = Math.ceil( (new Date() - ranges[3].limit) / 24 / 60 / 60 / 1000 );
      // newState.originalData = data.slice();

      // debugger
      if(projectType === 'investor') {
        amountData = reduceDataInvestor();
        newState.data = amountData;
      } else if(projectType === 'company') {
        companyStats = reducedDataCompany();
        newState.stats = companyStats;
      }
      //
      // newState.data = data;

      return newState;

      function reduceDataInvestor() {
        let reducedData;
        let filledDataWithFakes;
        let daysRangeOfData;
        let dataOrigin = action.data.purchases.slice();
        const newData = [];

        // debugger
        dataOrigin = dataOrigin.map( (item, i, arr) => {
          const resObj = {};
          // debugger
          resObj.close = item.unit_count;
          resObj.date = new Date(item.purchase_date);
          resObj.unit = item.unit_price;
          resObj.isFake = false;

          return resObj;
        })

        dataOrigin.sort( (a, b) => {
          return a.date - b.date;
        });

        newState.dateRanges.maxDateRange = (function() {
          const { ranges } = dateRanges;
          const firstDate = dataOrigin.first();
          let res = 0;

          for(let i = 0; i < ranges.length; i++) {
            const rangeItem = ranges[i];

            if(rangeItem.limit > firstDate.date) {
              res = i;
            } else {
              break;
            }
          }

          return res;
        }());

        reducedData = [];

        // combine values of objects at the same day
        dataOrigin.forEach( (dataObj, i) => {

          if(i === 0) {
            pushCurrent();
            return;
          }

          const lastObj = reducedData.last()
          const lastDateString = lastObj.date.toDateString();
          const currentObjDateString = dataObj.date.toDateString();

          if(lastDateString === currentObjDateString) {
            lastObj.close += dataObj.close;
          } else {
            pushCurrent();
          }

          function pushCurrent() {
            reducedData.push(dataObj);
          }

        })

        daysRangeOfData = Math.ceil( (new Date() - reducedData.first().date) / 24 / 60 / 60 / 1000 );

        let reducedDataCounter = 0;

        for(let i = daysRangeOfData-1; i > 0; i--) {
          const dataObj = reducedData[reducedDataCounter];
          const { year, month, date } = currentDateParams();
          const requiredDate = new Date(year, month, date - i);
          const dataObjToCompare = reducedData[reducedDataCounter];
          const dataObjStringToCompare = dataObjToCompare.date.toDateString();
          const requiredDateString = requiredDate.toDateString();

          if(dataObjStringToCompare === requiredDateString) {
            if(reducedDataCounter+1 !== reducedData.length) {
              newData.push(dataObjToCompare);
              reducedDataCounter++;
            } else {
              pushFake();
            }
          } else {
            pushFake();
          }

          function pushFake() {
            newData.push({
              close: 0,
              date: requiredDate,
              isFake: true,
            })
          }
        }

        return newData;

      }

      function reducedDataCompany() {
        let reducedData;
        const { data } = action;
        let { purchases, subscribers, visits} = data;
        const resObj = {};
        const amountData = reduceDataInvestor(purchases);
        resObj.amount = amountData;

        // convert fields
        subscribers = convertObjects(subscribers, 'visit_date');
        visits = convertObjects(visits, 'visit_date');

        subscribers = sortByDate(subscribers);
        visits = sortByDate(visits);

        subscribers = reduceByDate(subscribers);
        visits = reduceByDate(visits);

        subscribers = fillWithFakes(subscribers);
        visits = fillWithFakes(visits);

        resObj.visits = visits;
        resObj.subscr = subscribers;

        return resObj;

        function fillWithFakes(data) {
          const newData = [];
          let daysRangeOfData;

          daysRangeOfData = Math.ceil( (new Date() - data.first().date) / 24 / 60 / 60 / 1000 );

          let reducedDataCounter = 0;

          for(let i = daysRangeOfData-1; i > 0; i--) {

            const dataObj = data[reducedDataCounter];
            const { year, month, date } = currentDateParams();
            const requiredDate = new Date(year, month, date - i);
            const dataObjToCompare = data[reducedDataCounter];
            const dataObjStringToCompare = dataObjToCompare.date.toDateString();
            const requiredDateString = requiredDate.toDateString();

            if(dataObjStringToCompare === requiredDateString) {
              newData.push(dataObjToCompare);

              if(reducedDataCounter+1 !== data.length) {
                reducedDataCounter++;
              }
            } else {
              pushFake();
            }

            function pushFake() {
              newData.push({
                close: 0,
                date: requiredDate,
                isFake: true,
              })
            }
          }

          return newData;
        }

        function reduceByDate(arr) {
          const resArr = [];

          arr.forEach( (item, i) => {
            if( i === 0) {
              resArr.push(item);
              return;
            }

            if(resArr.last().date.valueOf() === item.date.valueOf()) {
              resArr.last().close += 1;
            } else {
              resArr.push(item);
            }
          })

          return resArr;
        }

        function convertObjects(arr, dateField, amountField) {
          return arr.map( item => {
            const resObj = {};
            const date = item[dateField];

            if(amountField) {
              resObj.close = item[amountField];
            } else {
              resObj.close = 1;
            }

            resObj.date = resetDate(date);

            return resObj;

            function resetDate(d) {
              const newDate = new Date(d);

              const year = newDate.getFullYear();
              const month = newDate.getMonth();
              const date = newDate.getDate();

              return new Date(year, month, date);
            }
          })
        }

        function sortByDate(arr) {
          return arr.sort( (a, b) => {
            return a.date - b.date;
          });
        }
      }
    }

    case projects.setCurrentUnit: {
      const newState = _.cloneDeep(state);

      newState.currentUnitValue = action.value;

      return newState;
    }

    default:
      return state;
  }
}
