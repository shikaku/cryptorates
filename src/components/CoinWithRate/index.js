import React from 'react'
import './style.css'

export default ({symbol, name, image, rate}) => (
  <div className="coin-with-rate">
    <img className="coin-with-rate__icon" src={image} />
    <div className="coin-with-rate__name">{name}</div>
    <div className="coin-with-rate__rate">${rate}</div>
  </div>
)
