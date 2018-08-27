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

    case projects.singleSuccess: {
      const newState = _.cloneDeep(state);
      let data = action.data.purchases;
      let maxDateRange;
      let reducedData;
      let filledDataWithFakes;
      let daysRangeOfData;
      // const daysRangeOfData = Math.ceil( (new Date() - ranges[3].limit) / 24 / 60 / 60 / 1000 );

      newState.originalData = data.slice();

      data = data.map( (item, i, arr) => {
        const resObj = {};
        resObj.close = item.unit_count;
        resObj.date = new Date(item.purchase_date);
        resObj.unit = item.unit_price;
        resObj.isFake = false;

        return resObj;
      })

      data.sort( (a, b) => {
        return a.date - b.date;
      });

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


      reducedData = [];

      // combine values of objects at the same day
      data.forEach( (dataObj, i) => {
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
      // debugger

      filledDataWithFakes = [];
      let reducedDataCounter = 0;

      for(let i = daysRangeOfData; i > 0; i--) {
        const dataObj = reducedData[reducedDataCounter];
        const { year, month, date } = currentDateParams();
        const requiredDate = new Date(year, month, date - i);
        const dataObjToCompare = reducedData[reducedDataCounter];
        const dataObjStringToCompare = dataObjToCompare.date.toDateString();
        const requiredDateString = requiredDate.toDateString();

        if(dataObjStringToCompare === requiredDateString) {
          if(reducedDataCounter+1 !== reducedData.length) {
            filledDataWithFakes.push(dataObjToCompare);
            reducedDataCounter++;
          } else {
            pushFake();
          }
        } else {
          pushFake();
        }

        function pushFake() {
          filledDataWithFakes.push({
            close: 0,
            date: requiredDate,
            isFake: true,
          })
        }

      }

      newState.data = filledDataWithFakes;

      return newState;
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
