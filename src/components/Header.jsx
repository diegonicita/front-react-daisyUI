import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div className="web-preview-header">
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
          <Link to="/">
            <div className="web-preview-header-logo"></div>
          </Link>
          <div className="web-preview-header-spacer"></div>
        </div>
  )
}