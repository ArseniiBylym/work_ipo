const header = {
  toggleMenu: 'HEADER_MENU_TOGGLE',
  changeFilter: 'FILTER_CHANGE',
}

const projects = requestsActionTypesCreate('PROJECTS');

export {
  header,
  projects,
}

function requestsActionTypesCreate(entity) {
  const typesArray = [
    {
      name: 'start',
      value: 'GET_START',
    },
    {
      name: 'success',
      value: 'GET_SUCCESS',
    },
    {
      name: 'fail',
      value: 'GET_FAIL',
    },
  ];

  const resObj = {};

  typesArray.forEach( type => {
    resObj[type.name] = `${entity}_${type.value}`;
  })

  return resObj;
}
