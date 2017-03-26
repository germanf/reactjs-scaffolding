import axios from 'axios';

const entityName = 'TEST';
const actions = {
  fetch: 'FETCH'
};

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const fetchTest = () => function fetch(dispach) {
  dispach({ type: 'TEST_FETCH' });

  axios.get(`${baseUrl}/posts`)
    .then((response) => {
      dispach({
        type: `${entityName}_${actions.fetch}_SUCCESS`,
        payload: response.data
      });
    })
    .catch((error) => {
      dispach({
        type: `${entityName}_${actions.fetch}_ERROR`,
        payload: error
      });
    });
};

export const addTest = () => '';
export const removeTest = () => '';
