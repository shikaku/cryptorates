const consts = {
  SET_BY_SYMBOLS: 'RATES:SET_BY_SYMBOLS',
};

const actions = {
  setBySymbols: (symbols, rates) => ({
    type: consts.SET_BY_SYMBOLS,
    symbols,
    rates,
  }),
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case consts.SET_BY_SYMBOLS:
      const { symbols, rates } = action;
      return symbols.reduce((obj, symbol, idx) => {
        obj[symbol] = rates[idx];
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
