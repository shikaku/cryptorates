const consts = {
  SET: 'SYMBOLS:SET',
};

const actions = {
  set: (symbols) => ({
    type: consts.SET,
    symbols: !Array.isArray ? [symbols] : symbols
  }),
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case consts.SET:
      return [...action.symbols];
    default:
      return state;
  }
}

export {
  consts,
  actions,
  reducer,
}
