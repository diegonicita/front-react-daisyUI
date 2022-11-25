import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className="web-header">
      <div className="color-stripe top-stripe">
        <div
          className="color-stripe-bar"
          style={{ backgroundColor: 'rgb(255, 192, 14)' }}
        ></div>
        <div
          className="color-stripe-bar"
          style={{ backgroundColor: 'rgb(238, 77, 48)' }}
        ></div>
        <div
          className="color-stripe-bar"
          style={{ backgroundColor: 'rgb(0, 168, 152)' }}
        ></div>
      </div>
      <div className="web-header-logo"></div>
      <div className="web-header-spacer"></div>
    </div>
  )
}