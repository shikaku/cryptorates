import React from 'react'
import './style.css'

export default ({ show }) => (
  show
    ? <div className="loader">
        <img className="loader__icon" src="https://loading.io/spinners/bluecat/index.blue-longcat-spinner.svg" alt="loading..." />
      </div>
    : null
)
