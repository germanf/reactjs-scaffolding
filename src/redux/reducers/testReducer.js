const defaultState = {
  loading: false,
  items: [],
  error: null,
};

const entityName = 'TEST';
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case `${entityName}_FETCH`: {
      return {
        ...state,
        loading: true,
      };
    }
    case `${entityName}_FETCH_REJECTED`: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case `${entityName}_FETCH_FULFILLED`: {
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    }
    case `${entityName}_ADD`: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case `${entityName}_UPDATE`: {
      const { id } = action.payload;
      const newItems = [...state.items];
      const itemToUpdate = newItems.findIndex(item => item.id === id);
      newItems[itemToUpdate] = action.payload;

      return {
        ...state,
        items: newItems,
      };
    }
    case `${entityName}_DELETE`: {
      const id = action.payload;
      let newItems = [...state.items];

      // Remove using filter
      newItems = newItems.filter(item => item.id !== id);

      return {
        ...state,
        items: newItems,
      };
    }
    default: return state;
  }
}
