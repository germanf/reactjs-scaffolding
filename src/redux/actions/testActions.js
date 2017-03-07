export function fetchTest() {
  return function fetch(dispach) {
    dispach({ type: 'TEST_FETCH' });

    // Simulating a request
    setTimeout(() => {
      dispach({
        type: 'TEST_FETCH_FULFILLED',
        payload: [{ name: 'Wash the dishes', checked: true }],
      });
    }, 2000);
  };
}

export function addTest(name) {
  // Assign a new id and checked false
  const todo = {
    name,
    checked: false,
  };

  return {
    type: 'TEST_ADD',
    payload: todo,
  };
}

export function deleteTest(id) {
  return {
    type: 'TEST_DELETE',
    payload: id,
  };
}
