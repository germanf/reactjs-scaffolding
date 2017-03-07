const defaultState = {
  items: [],
  loading: false,
  error: null,
};

const entityName = 'TEST';
const actions = {
  fetch: 'FETCH',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case `${entityName}_${actions.fetch}`: {
      return {
        ...state,
        loading: true,
      };
    }
    case `${entityName}_${actions.fetch}_REJECTED`: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case `${entityName}_${actions.fetch}_FULFILLED`: {
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    }
    default: return state;
  }
}
