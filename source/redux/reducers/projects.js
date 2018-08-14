import { projects } from '../constants';
import _ from 'lodash';

const initialState = {
  items: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case projects.success: {
      const newState = _.cloneDeep(state);

      newState.items = action.data;

      return newState;
    }

    default:
      return state;
  }
}
