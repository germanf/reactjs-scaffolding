const defaultState = {
  items: [],
  loading: false,
  error: null
};

const entityName = 'TEST';
const actions = {
  fetch: 'FETCH'
};

/**
 * Test Reducer
 * @param   {Object} state : app state
 * @param   {string} action : app action
 * @returns {Object} an immutable new state
 */
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case `${entityName}_${actions.fetch}`: {
      return {
        ...state,
        loading: true
      };
    }
    case `${entityName}_${actions.fetch}_SUCCESS`: {
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    }
    case `${entityName}_${actions.fetch}_ERROR`: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default: return state;
  }
}
