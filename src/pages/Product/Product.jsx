import React, {useState} from 'react'
import { useUserStore } from '../../redux/hooks/useUser'
import { Link } from 'react-router-dom'
import './Product.css'
import { Canvas, extend } from '@react-three/fiber'
import { Mark } from '../../components/Mark'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Footer } from '../../components/Footer'
import { Outlet} from 'react-router-dom'

extend({ OrbitControls });

export default function Product() {    

  const { user, setUser, setToken } = useUserStore()

  return (
    <>
    <div className="login-container">
      <div>
        <section className="main-section"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            alignItems: 'center'
          }}>
            Main Section
        </section>
        <section className="main-section">
          <div className="product-wrapper">
            <div className="left-side">
              <div className="canvas-container">
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
              </div>
            </div>
            <div className="right-side">
              <div className="product-title"> Amy Kilin Brown </div>
              <div className="product-price"> $240.00 </div>
              <div className="product-description-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                repudiandae veritatis neque quibusdam sint sunt nam at tenetur
                eligendi praesentium reiciendis beatae cum eaque sit magni nisi,
                deserunt, corrupti repellendus. Ab illum cupiditate nihil minus
                voluptatem provident quia libero. Natus dolore provident
              </div>
              <br />
              <div className="product-description-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                repudiandae veritatis neque quibusdam sint sunt nam at tenetur
                eligendi praesentium reiciendis beatae cum eaque sit magni nisi,
                deserunt, corrupti repellendus. Ab illum cupiditate nihil minus
                voluptatem provident quia libero. Natus dolore provident ad sunt
                tempore quaerat fugit reiciendis doloribus quae.{' '}
              </div>
            </div>
          </div>
        </section>
        <section className="description-section">
        <div className="description-section-title">Description</div>
          <div className="description-section-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            repudiandae veritatis neque quibusdam sint sunt nam at tenetur
            eligendi praesentium reiciendis beatae cum eaque sit magni nisi,
            deserunt, corrupti repellendus. Ab illum cupiditate nihil minus
            voluptatem provident quia libero. Natus dolore provident ad sunt
            tempore quaerat fugit reiciendis doloribus quae.{' '}
          </div>
        </section>        
      </div>
    </div>
    
    </>
  )
}