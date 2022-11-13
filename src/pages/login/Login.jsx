import React, { useState } from 'react'
import { useUserStore } from '../../redux/hooks/useUser'
import './Login.css'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Box } from '../../components/Box'
import { Mark } from '../../components/Mark'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export default function Login() {
 
  const { user, setUser } = useUserStore()

  return (
    <div className="app">
      <div>
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
          <div className="web-preview-header-logo"></div>          
        </div>

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
  )
}
