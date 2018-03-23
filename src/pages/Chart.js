import React from 'react'
import { withRouter } from 'react-router'
import Page from 'src/components/Page'
import Chart from 'src/containers/Chart'

export default withRouter(({ match }) => (
  <Page>
    <Chart symbol={match.params.symbol} />
  </Page>
));
