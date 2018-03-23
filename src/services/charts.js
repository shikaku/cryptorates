const consts = {
  SET_BY_SYMBOLS: 'CHARTS:SET_BY_SYMBOLS',
};

const actions = {
  setBySymbols: (symbols, charts) => ({
    type: consts.SET_BY_SYMBOLS,
    symbols,
    charts,
  }),
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case consts.SET_BY_SYMBOLS:
      const { symbols, charts } = action;
      return symbols.reduce((obj, symbol, idx) => {
        obj[symbol] = charts[idx];
        return obj;
      }, {})
    default:
      return state;
  }
}

export {
  consts,
  actions,
  reducer,
}
