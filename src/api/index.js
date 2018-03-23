import fetch from 'src/utils/fetch'
import omit from 'object.omit'

const request = (() => {
  const url = '/desearch-api';
  return path => fetch(`${url}${path}`)
})();

export const fetchCoinAndChartsBySymbol = (symbol) => (
  request(`/search/v2/?request=${symbol}`)
    .then(data => data[0].data)
    .then(data => omit(data, (v, k) => (
      ['symbol', 'name', 'image', 'charts'].includes(k)
    )))
)

export const fetchCoinsAndChartsBySymbols = (symbols) => (
  Promise.all(symbols.map(symbol => fetchCoinAndChartsBySymbol(symbol)))
)

export const fetchRatesBySymbols = (symbols) => (
  request(`/rates/v1/?t=${symbols.join()}`)
    .then(({rates}) => symbols.map(symbol => rates[symbol]))
)
