import React from 'react'
// import { useUserStore } from '../../redux/hooks/useUser'
import { Canvas, extend } from '@react-three/fiber'
import { Mark } from '../../components/Mark'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import styled from 'styled-components'

extend({ OrbitControls })

export default function Product() {
  // const { user, setUser, setToken } = useUserStore()

  return (
    <Container>              
        <MainSection>
          <ProductWrapper>
            <LeftSide>
              <CanvasContainer>
                <Canvas
                  style={{
                    border: '1px solid rgba(0,0,0,0)',
                    backgroundColor: '#FFFFF',
                    borderRadius: '10px'
                  }}
                >
                  <ambientLight intensity="1" color="#444444" />
                  <spotLight
                    color="gray"
                    intensity={1}
                    position={[3, 3, 3]}
                    angle={0.7}
                    penumbra={1}
                    castShadow
                  />
                  <spotLight
                    color="gray"
                    intensity={1}
                    position={[-15, 12, 2]}
                    angle={0.5}
                    penumbra={1}
                    castShadow
                  />
                  <spotLight
                    color="grey"
                    intensity={1}
                    position={[5, 12, 0]}
                    angle={0.5}
                    penumbra={1}
                    castShadow
                  />
                  <Mark />
                </Canvas>
              </CanvasContainer>
            </LeftSide>
            <RightSide>
              <ProductTitle> Amy Kilin Brown </ProductTitle>
              <ProductPrice> $240.00 </ProductPrice>
              <ProductDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                repudiandae veritatis neque quibusdam sint sunt nam at tenetur
                eligendi praesentium reiciendis beatae cum eaque sit magni nisi,
                deserunt, corrupti repellendus. Ab illum cupiditate nihil minus
                voluptatem provident quia libero. Natus dolore provident.              
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                repudiandae veritatis neque quibusdam sint sunt nam at tenetur
                eligendi praesentium reiciendis beatae cum eaque sit magni nisi,
                deserunt, corrupti repellendus. Ab illum cupiditate nihil minus
                voluptatem provident quia libero. Natus dolore provident ad sunt
                tempore quaerat fugit reiciendis doloribus quae.{' '}
              </ProductDescription>
            </RightSide>
          </ProductWrapper>
        </MainSection>
        <DescriptionSection>
          <DescriptionSectionTitle>Description</DescriptionSectionTitle>
          <DescriptionSectionText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            repudiandae veritatis neque quibusdam sint sunt nam at tenetur
            eligendi praesentium reiciendis beatae cum eaque sit magni nisi,
            deserunt, corrupti repellendus. Ab illum cupiditate nihil minus
            voluptatem provident quia libero. Natus dolore provident ad sunt
            tempore quaerat fugit reiciendis doloribus quae.{' '}
          </DescriptionSectionText>
        </DescriptionSection>
      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`
const MainSection = styled.section({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  alignItems: 'center'
})

const ProductWrapper = styled.div`
  display: flex;  
`

const LeftSide = styled.div`
  width: 370px;
  flex-shrink: 0;
  margin-left: 1rem;
`
const CanvasContainer = styled.div`
width: 350px;
  height: 350px;
`
const RightSide = styled.div`
  width: 50%;
`
const ProductTitle = styled.div`
font-size: 46px;
  margin-top: -0.19em;
  line-height: 1.2em;
`
const ProductPrice = styled.div`
  font-size: 30px;
  color: #FA4729;
  margin-top: 0.5rem;
  margin-bottom:0.5rem;
  font-weight: bold;
`

const ProductDescription = styled.div`
  font-weight: 100;
  font-size: 18px;
  line-height: 1.777777;
`
const DescriptionSection = styled.div`
  padding: 3rem;
  display: flex;  
  flex-wrap: wrap;
  width: 100%;
  align-items: 'center';  
  `
const DescriptionSectionTitle = styled.div`
  font-size: 30px;
  margin-top: -0.19em;
  line-height: 1.2em;
  margin: 0 auto;
  margin-bottom: 1rem;
`
const DescriptionSectionText = styled.div`
font-weight: 100;
  font-size: 18px;
  line-height: 1.777777;
`
