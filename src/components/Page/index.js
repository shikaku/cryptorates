import React from 'react'
import './style.css'

export default ({title, children}) => (
  <div className="page">
    <div className="page__logo">
      <div className="logo">Crypto rates</div>
    </div>
    {title && <div className="page__title">{title}</div>}
    <div className="page__body">{children}</div>
  </div>
)
