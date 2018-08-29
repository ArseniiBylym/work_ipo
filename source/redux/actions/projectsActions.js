import ProjectApi from '../../utils/api';
import { projects } from '../constants';

export function getProjects() {
  return dispatch => {

    dispatch({type: projects.listStart})
    const { getProjectsList } = new ProjectApi();

    return getProjectsList()
      .then( res => {
        dispatch({type: projects.listSuccess, data: res});
      })
      .catch( res => {
        dispatch({type: projects.listFail, error: res.error});
      })
  }
}

export function getProject(type, id) {
  return dispatch => {
    dispatch({type: projects.singleStart});

    const { getProjectSingle } = new ProjectApi();

    return getProjectSingle(type)
      .then( res => {
        // debugger
        dispatch({type: projects.singleSuccess, data: res.data, projectType: type});
      })
      .catch( rej => {
        dispatch({type: projects.singleFail});
      })
  }
}

export function changeStatFilter(value) {
  return dispatch => {
    dispatch({type: projects.changeStatFilter, value});
  }
}

export function setCurrentUnitValue(value) {
  return dispatch => {
    return dispatch({type: projects.setCurrentUnit, value})
  }
}

export function checkFilter(statType) {
  return dispatch => {
    return dispatch({type: projects.checkFilter, statType});
  }
}
