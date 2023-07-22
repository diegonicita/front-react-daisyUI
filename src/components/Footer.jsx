import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Box>
      <Title>WebApp: Reaching out for a bright future.</Title>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink>Aim</FooterLink>
            <FooterLink>Vision</FooterLink>
            <FooterLink>Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink>Writing</FooterLink>
            <FooterLink>Internships</FooterLink>
            <FooterLink>Coding</FooterLink>
            <FooterLink>Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink>Buenos Aires</FooterLink>
            <FooterLink>Cordoba</FooterLink>
            <FooterLink>Mendoza</FooterLink>
            <FooterLink>Tucuman</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink>
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink>
              <i className="fab fa-instagram">
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink>
              <i className="fab fa-twitter">
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink>
              <i className="fab fa-youtube">
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

const Box = styled.div`
  padding: 80px 60px;
  background: rgba(38, 38, 38, 0.75);
  position: relative;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

const Title = styled.h1`
  color: rgb(0, 168, 152);
  text-align: center;
  margin-top: -50px;
  margin-bottom: 25px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:visited {
    color: #fff;
  }

  &:hover {
    color: rgb(0, 168, 152);
    transition: 200ms ease-in;
  }
`

const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`
