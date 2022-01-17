import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from '@react-spring/web'
import { Button } from '@material-ui/core'


export default function DescriptionFrontPageDesktop() {
    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: toggle,
      delay: 2000,
      config: config.molasses,
      onRest: () => set(!toggle),
    })
    return transitions(({ opacity }, item) =>
      item ? (
        <animated.div
          style={{
            position: 'absolute',
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            width: '350px',
            // right: '50px',
            right: '3.5vw',
            top: '50vh'
          }}>
          <h1 className='oswald'
          style={{
              textAlign: 'right',
              marginRight: '3.5vw',
              fontSize: '48px',
              marginBottom: '0'
          }}>Радуй</h1>

          <p
          style={{
              fontSize: '18px',
              lineHeight: '130%',
              letterSpacing: '0.15em',
              marginTop:'16px',
              marginRight: '3.5vw',
              textAlign: 'right'
          }}>Обрадуй своих друзей, близких или знакомых необычным подарком</p>
          <Button
          className='rubik'
          size="large"
            style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: '3.5vw',
                fontSize: '18px',
                backgroundColor: '#E2C0BF',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                WebkitBackdropFilter: 'blur(15px)'

            }}
          >Подробнее</Button>
        </animated.div>
      ) 
      : (
        <animated.div
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          width: '300px',
          // right: '50px',
          right: '3.5vw',
          top: '50vh'
        }}>
        <h1 className='oswald'
        style={{
            textAlign: 'right',
            marginRight: '3.5vw',
            fontSize: '48px',
            marginBottom: '0'
        }}>Удивляй</h1>

        <p
        style={{
            fontSize: '18px',
            lineHeight: '130%',
            letterSpacing: '0.15em',
            marginTop:'16px',
            marginRight: '3.5vw',
            textAlign: 'right'
        }}>Удивлены будут даже те, кто думает что их уже не удивить</p>
        <Button
        className='rubik'
        size="large"
          style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: '3.5vw',
              fontSize: '18px',
              backgroundColor: '#E2C0BF',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '20px',
              paddingRight: '20px',
              WebkitBackdropFilter: 'blur(15px)'

          }}
        >Подробнее</Button>
      </animated.div>
      )
    )
  }


//   const BootstrapButton = styled(Button)({
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 16,
//     padding: '6px 12px',
//     border: '1px solid',
//     lineHeight: 1.5,
//     backgroundColor: '#0063cc',
//     borderColor: '#0063cc',
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       backgroundColor: '#0069d9',
//       borderColor: '#0062cc',
//       boxShadow: 'none',
//     },
//     '&:active': {
//       boxShadow: 'none',
//       backgroundColor: '#0062cc',
//       borderColor: '#005cbf',
//     },
//     '&:focus': {
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
//   });

