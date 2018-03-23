import React from 'react'
import Chart from 'react-highcharts/ReactHighstock'

const configure = (title, data) => ({
  rangeSelector: {
    selected: 1
  },
  title: {
    text: title,
  },
  series: [{
    name: 'AAPL',
    data: data,
    tooltip: {
      valueDecimals: 2
    }
  }]
})

export default ({coin, charts}) => {
  const data = charts['1y'].map(({timestamp, closeValue}) => ([timestamp*1000, closeValue]))
  console.log(data);
  return (
    <Chart config={configure(`${coin.name} price`, data)} />
  )
}
