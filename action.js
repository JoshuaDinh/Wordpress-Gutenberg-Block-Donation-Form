function updateSteps(state, payload) {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  };
}
