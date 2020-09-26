import React, { Suspense, useState, useEffect, useMemo } from 'react'

import { Canvas, useLoader } from 'react-three-fiber'
import { useTransition, useSpring, a } from 'react-spring/three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

import flower from './icon_assets/flower.svg';
import path from './icon_assets/path.svg';
import me from './icon_assets/me.svg';

const colors = ['#21242d', '#ea5158', '#0d4663']

const Scene = React.memo(({ urls }) => {
  const svgs = useLoader(SVGLoader, urls)
  const shapes = useMemo(
    () =>
      svgs.map(({ paths }) =>
        paths.flatMap((path, index) =>
          path
            .toShapes(true)
            .map((shape) => ({ shape, color: path.color, fillOpacity: path.userData.style.fillOpacity, index }))
        )
      ),
    [svgs]
  )

  const [page, setPage] = useState(0)
  useEffect(() => void setInterval(() => setPage((i) => (i + 1) % urls.length), 3000), [urls.length])

  const { color } = useSpring({
    from: { color: colors[0] },
    color: colors[page],
    delay: 250,
    config: { mass: 5, tension: 800, friction: 400 },
  })

  const transitions = useTransition(shapes[page], (item) => item.shape.uuid, {
    from: { rotation: [0, 0.4, 0], position: [-500, 0, 0], opacity: 0 },
    enter: { rotation: [0, 0, 0], position: [0, 0, 0], opacity: 1 },
    leave: { rotation: [0, -0.4, 0], position: [500, 0, 0], opacity: 0 },
    order: ['leave', 'enter', 'update'],
    config: { mass: 4, tension: 500, friction: 100 },
    trail: 5,
    lazy: true,
    unique: true,
    reset: true,
  })
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.5} position={[300, 300, 4000]} />
      <mesh scale={[10000, 10000, 1]} rotation={[0, -0.2, 0]}>
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
        <a.meshPhongMaterial attach="material" color={color} depthTest={false} />
      </mesh>
      <a.group position={[1220, 700, page]} rotation={[0, 0, Math.PI]}>
        {transitions.map(
          ({ item: { shape, color, fillOpacity, index }, key, props: { opacity, position, rotation } }) => (
            <a.mesh key={key} rotation={rotation} position={position.interpolate((x, y, z) => [x, y, z + index])}>
              <a.meshPhongMaterial
                attach="material"
                color={color}
                opacity={opacity.interpolate((o) => o * fillOpacity)}
                depthWrite={false}
                transparent
              />
              <shapeBufferGeometry attach="geometry" args={[shape]} />
            </a.mesh>
          )
        )}
      </a.group>
    </>
  )
})

export default function App() {
  return (
    <Canvas
      invalidateFrameloop
      camera={{ fov: 90, position: [0, 0, 550], near: 0.1, far: 20000 }}
      onCreated={({ camera }) => camera.lookAt(0, 0, 0)}>
      <Suspense fallback={null}>
        <Scene urls={[path, me, flower]} />
      </Suspense>
    </Canvas>
  )
}
