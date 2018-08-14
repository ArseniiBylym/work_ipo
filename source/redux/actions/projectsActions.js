import { getProjectsApi } from '../../utils/api';
import { projects } from '../constants';

export function getProjects() {
  return dispatch => {

    dispatch({type: projects.start})

    return getProjectsApi()
      .then( res => {
        dispatch({type: projects.success, data: res});
      })
      .catch( res => {
        dispatch({type: projects.fail, error: res.error});
      })
  }
}
