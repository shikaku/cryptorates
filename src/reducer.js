import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as appReducer } from 'src/services/app'
import { reducer as symbolsReducer } from 'src/services/symbols'
import { reducer as coinsReducer } from 'src/services/coins'
import { reducer as ratesReducer } from 'src/services/rates'
import { reducer as chartsReducer } from 'src/services/charts'
 
export default combineReducers({
  app: appReducer,
  symbols: symbolsReducer,
  coins_by_symbol: coinsReducer,
  charts_by_symbol: chartsReducer,
  rates_by_symbol: ratesReducer,
})
