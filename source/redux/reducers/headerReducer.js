import { header } from '../constants';
import _ from 'lodash';

const initialState = {
  isMenuOpened: false,
  filters: {
    field: 'all',
    money: 'all',
    time: 'all',
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case header.toggleMenu: {
      const newState = _.cloneDeep(state);
      newState.isMenuOpened = !newState.isMenuOpened;

      return newState;
    }

    case header.changeFilter: {
      const { name, value } = action.filterObj;
      const newState = _.cloneDeep(state);
      newState.filters[name] = value;

      return newState;
    }

    default:
      return state;
  }
}
