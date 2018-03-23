import React from 'react'
import { Link } from 'react-router-dom'
import CoinWithRate from 'src/components/CoinWithRate'
import './style.css'

export default ({coins, rates}) => (
  <ul className="coin-list-with-rates">
    {coins.map((coin, idx) => {
      const props = {...coin, rate: rates[idx]};
      return (
        <li className="coin-list-with-rates__item">
          <Link to={`/chart/${coin.symbol}`}>
            <CoinWithRate {...props} />
          </Link>
        </li>
      )
    })}
  </ul>
)
