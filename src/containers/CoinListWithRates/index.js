import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as symbols } from 'src/services/symbols'
import { actions as app } from 'src/services/app'
import CoinListWithRates from 'src/components/CoinListWithRates'

const mapStateToProps = (state) => ({
  coins: state.symbols.map(symbol => state.coins_by_symbol[symbol]),
  rates: state.symbols.map(symbol => state.rates_by_symbol[symbol])
})

export default connect(mapStateToProps)(CoinListWithRates)
