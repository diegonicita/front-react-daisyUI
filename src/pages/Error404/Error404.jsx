import React from 'react'
import styled from 'styled-components'

export default function Error404() {
  return (
    <Container>Error 404. Page not found.</Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 70vh;
  align-items: center;    
  padding-top: 5rem;
  padding-bottom: 5rem;  
  font-size: 48px;
`
