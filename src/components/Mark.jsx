// import { createRoot } from 'react-dom/client'
import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export const Mark = (props) => {
  // This reference gives us direct access to the THREE.Mesh object  
  const mark = useRef()
  // Subscribe this component to the render-loop, rotate the mesh every frame  
  // useFrame((state, delta) => (mark.current.rotation.y += 0.015))  
  
  const obj = useLoader(FBXLoader, '/MARK.fbx')
  
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>    
    <CameraControls />
    <primitive object={obj} fog={false} scale={0.10} ref={mark} position={[0,-1,0]}/>
    </>
  )
}

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};
