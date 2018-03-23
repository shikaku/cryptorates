import { connect } from 'react-redux'
import Chart from 'src/components/Chart'

const mapStateToProps = (state, { symbol }) => ({
  coin: state.coins_by_symbol[symbol],
  charts: state.charts_by_symbol[symbol],
})

export default connect(mapStateToProps)(Chart)
