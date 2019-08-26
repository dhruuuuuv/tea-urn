import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Illustration, Ellipse, Shape, RoundedRect, useRender, Cylinder } from 'react-zdog'
// New react-spring target, for native animation outside of React
import { a, useSpring } from 'react-spring/zdog'
// import './styles.css'

/** --- Basic, re-usable shapes -------------------------- */
const TAU = Math.PI * 2
const Eye = props => <Ellipse diameter={1.5} quarters={2} translate={{ x: -2.2, y: 0, z: 4.5 }} rotate={{ z: -TAU / 4 }} color="#444B6E" stroke={0.5} {...props} />
const Leg = props => (
  <a.Shape path={[{ y: 0 }, { y: 6 }]} translate={{ x: -3 }} color="#747B9E" stroke={4} {...props}>
    <Shape path={[{ y: 0 }, { y: 6 }]} translate={{ y: 6 }} rotate={{ x: -TAU / 8 }} color="#747B9E" stroke={4} />
    <RoundedRect width={2} height={4} cornerRadius={1} translate={{ y: 12, z: -3.5 }} rotate={{ x: TAU / 6 }} color="#444B6E" fill stroke={4} />
  </a.Shape>
)
const Arm = props => (
  <a.Shape path={[{ y: 0 }, { y: 4 }]} translate={{ x: -5, y: -2 }} color="#F0F2EF" stroke={4} {...props}>
    <Shape path={[{ y: 0 }, { y: 4 }]} translate={{ y: 6 }} rotate={{ x: TAU / 8 }} color="#EA0" stroke={4} />
    <Shape translate={{ z: 4, y: 9, x: 0 }} stroke={5.4} color="#EA0" />
  </a.Shape>
)

const Handle = props => <Ellipse color="black" diameter={5} quarters={2} translate={{ z: -10, x: 10 }} {...props} />
const Light = props => <Ellipse color="red" diameter={1} stroke={1} translate={{ z: -20, y: 10 }} rotate={{ x: TAU / 4 }} {...props} />
const Spout = props => (
  <Cylinder color="#2E2F2F" diameter={1} length={5} rotate={{ x: TAU / 4 }} translate={{ z: -28, y: 10 }}>
    <Cylinder color="#2E2F2F" diameter={0.5} length={4} rotate={{ x: TAU / 4 }} translate={{ z: -2, y: -2 }}>
      {' '}
    </Cylinder>
    <Cylinder color="#2E2F2F" diameter={0.25} length={1} rotate={{ x: TAU / 4 }} translate={{ z: -2, y: 1 }}>
      {' '}
    </Cylinder>
    <Ellipse color="#2E2F2F" diameter={3} length={1} rotate={{}} translate={{ z: -2, y: 3 }}>
      {' '}
    </Ellipse>
  </Cylinder>
)

/** --- Assembly ----------------------------------------- */
export default function TeaUrn () {
  // Change motion every second
  const [up, setUp] = useState(true)
  useEffect(() => void setInterval(() => setUp(previous => !previous), 450), [])
  // Turn static values into animated values
  const { rotation, color, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#EA0' : 'tomato', rotation: up ? 0 : Math.PI })
  // useRender allows us to hook into the render-loop
  const ref = useRef()
  let t = 0
  // useRender(() => (ref.current.rotate.z = Math.cos((t += 0.1) / TAU)))
  useRender(() => {
    ref.current.rotate.x = 1.4 + Math.cos((t += 0.05) / TAU) / 4
    ref.current.rotate.y = - 0.1 + Math.cos((t += 0.05) / TAU) / 8

  })

  return (
    <Cylinder ref={ref} color="#8E9091" backface="#5B5C5D" diameter={20} length={25} rotate={{ x: TAU / 4 - 0.25 }}>
      <Cylinder ref={ref} color="#8E9091" backface="#5B5C5D" diameter={20} length={5} translate={{ z: 15.5 }}>
        <Cylinder ref={ref} color="#2E2F2F" backface="black" diameter={3} length={2} translate={{ z: 3 }}>
          <Cylinder ref={ref} color="black" backface="black" stroke={1} diameter={3.5} length={0.25} translate={{ z: 1 }} />

          <Handle />
          <Handle rotate={{ y: TAU / 2 }} translate={{ x: -10, z: -10 }} />

          <Light />

          <Spout />
        </Cylinder>
      </Cylinder>
    </Cylinder>
  )
}
