import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styled from 'styled-components'

function Home() {
  
  const navigate = useNavigate(); 

  return (
    <Container>
      <LogoContainer>
        <img src={logo} width="300" alt="Alcance Tech" />
      </LogoContainer>
      <Title>
        Alcance Tech
      </Title>
      <Subtitle>
        Reaching Out For A Bright Future
      </Subtitle>      
      <ButtonContainer>
        <Button onClick={ ()=> navigate("root/login")}>
          Start
        </Button>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
`

const LogoContainer = styled.div`
  text-align: center;
  margin-top: 6rem;
`
const Title = styled.div`
text-align: center;
margin: 0.75rem;
font-size: 3rem;
font-weight: bold;
`
const Subtitle = styled.div`
text-align: center;
margin: 0.75rem;
font-size: 1.5rem;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  background: #00a898;
  border: 1px solid #00a898;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
&:hover {
  background: black;
  border: 1px solid black;
}
`

export default Home
