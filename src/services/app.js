import omit from 'object.omit'
import { fetchCoinsAndChartsBySymbols, fetchRatesBySymbols } from 'src/api'
import { actions as coins } from 'src/services/coins'
import { actions as rates } from 'src/services/rates'
import { actions as charts } from 'src/services/charts'

const consts = {
  LOAD_DATA_FOR_COINS: 'APP:LOAD_DATA_FOR_COINS',
  LOAD_DATA_FOR_COINS_SUCCESS: 'APP:LOAD_DATA_FOR_COINS_SUCCESS',
  LOAD_DATA_FOR_COINS_ERROR: 'APP:LOAD_DATA_FOR_COINS_ERROR',
};

const actions = {
  loadDataForCoins: symbols => dispatch => {
    dispatch({type: consts.LOAD_DATA_FOR_COINS, symbols});
    Promise.all([
      fetchCoinsAndChartsBySymbols(symbols),
      fetchRatesBySymbols(symbols),
    ])
    .then(([infoAndCharts, rateList]) => {
      dispatch(coins.setBySymbols(symbols, infoAndCharts.map(data => omit(data, 'charts'))));
      dispatch(rates.setBySymbols(symbols, rateList));
      dispatch(charts.setBySymbols(symbols, infoAndCharts.map(data => data.charts)));
      dispatch(actions.loadDataForCoinsSuccess(symbols));
    }).catch(error => {
      dispatch(actions.loadDataForCoinsError(symbols, error));
    })
  },
  loadDataForCoinsSuccess: (symbols) => ({type: consts.LOAD_DATA_FOR_COINS_SUCCESS, symbols}),
  loadDataForCoinsError: (symbols, error) => ({type: consts.LOAD_DATA_FOR_COINS_ERROR, symbols, error}),
};

const initial_state = {
  state: 'notloaded',
  error: '',
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case consts.LOAD_DATA_FOR_COINS:
      return {
        ...state,
        state: 'loading',
      };
    case consts.LOAD_DATA_FOR_COINS_SUCCESS:
      return {
        ...state,
        state: 'loaded',
        error: '',
      };
    case consts.LOAD_DATA_FOR_COINS_ERROR:
      return {
        ...state,
        state: 'error',
        error: action.error,
      };
    default:
      return state;
  }
}

export {
  consts,
  actions,
  reducer,
}
