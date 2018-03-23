import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from 'src/components/App'
import AppLoader from 'src/containers/AppLoader'
import { actions as app } from 'src/services/app'
import { actions as symbols } from 'src/services/symbols'
import { withRouter } from 'react-router-dom'

const AVAILABLE_SYMBOLS = ['BTC', 'ETH', 'XRP', 'BCH', 'LTC', 'ADA', 'NEO', 'XLM', 'EOS', 'XMR'];

const mapStateToProps = (state) => ({
  appState: state.app.state,
})

class AppContainer extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch(symbols.set(AVAILABLE_SYMBOLS));
    dispatch(app.loadDataForCoins(AVAILABLE_SYMBOLS));
  }
  render() {
    return (
      <div>
        <AppLoader />
        {this.props.appState === 'loaded' && this.props.children}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(AppContainer))
