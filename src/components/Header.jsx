import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import imageLogo from '../assets/isologo-alcance.png'

const WebHeader = styled.div`
  height: 180px;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 5px 8px 0 rgb(0 0 0 / 14%), 0 1px 14px 0 rgb(0 0 0 / 12%);
  z-index: 1;
  display: flex;
  padding: 4px 20px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(38,38,38,0.75);
`

const ColorStripe = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  z-index: 100000;
`
const ColorBar = styled.div`
  flex: 1;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.05);
  background-color: ${props => props.color};  
`
const Logo = styled.div`
  width: 110px;
  height: 110px;
  background: url(${props => props.imageLogo}) no-repeat 0;
  background-size: 110px 110px;  
`

const Spacer = styled.div`
  flex: 1 1; 
`

export const Header = () => {
  return (
    <WebHeader>
      <ColorStripe>
        <ColorBar color='rgb(255, 192, 14)'/>
        <ColorBar color='rgb(238, 77, 48)'/>
        <ColorBar color='rgb(0, 168, 152)'/>        
      </ColorStripe>
      <Link to="/">
        <Logo imageLogo={imageLogo}/>
      </Link>
      <Spacer />      
    </WebHeader>
  )
}
