import { getProjectsApi, getProjectSingleApi } from '../../utils/api';
import { projects } from '../constants';

export function getProjects() {
  return dispatch => {

    dispatch({type: projects.listStart})

    return getProjectsApi()
      .then( res => {
        dispatch({type: projects.listSuccess, data: res});
      })
      .catch( res => {
        dispatch({type: projects.listFail, error: res.error});
      })
  }
}

export function getProject(id) {
  return dispatch => {

    dispatch({type: projects.singleStart});

    return getProjectSingleApi()
      .then( res => {
        dispatch({type: projects.singleSuccess, data: res});
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
