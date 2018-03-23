const consts = {
  SET_BY_SYMBOLS: 'COINS:SET_BY_SYMBOLS',
};

const actions = {
  setBySymbols: (symbols, coins) => ({
    type: consts.SET_BY_SYMBOLS,
    symbols,
    coins,
  }),
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case consts.SET_BY_SYMBOLS:
      const { symbols, coins } = action;
      return symbols.reduce((obj, symbol, idx) => {
        obj[symbol] = coins[idx];
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
