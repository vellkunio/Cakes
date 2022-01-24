import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from '@react-spring/web'
import { Button } from '@material-ui/core'

import smoothscroll from 'smoothscroll-polyfill';



export default function DescriptionFrontPageDesktop() {
  let state1 = 'Радуй'
  let state2 = 'Удивляй'
  let text1 = 'Обрадуй своих друзей, близких или знакомых необычным подарком'
  let text2 = 'Удивлены будут даже те, кто думает что их уже не удивить'
  let btnText = 'ПОДРОБНЕЕ'

  if (localStorage.language === 'RU') {
    state1 = 'Радуй'
    state2 = 'Удивляй'
    text1 = 'Обрадуй своих друзей, близких или знакомых необычным подарком'
    text2 = 'Удивлены будут даже те, кто думает что их уже не удивить'
    btnText = 'ПОДРОБНЕЕ'
  } else if (localStorage.language === 'UA') {
    state1 = 'Радуй'
    state2 = 'Дивуй'
    text1 = 'Порадуй своїх друзів, близьких або знайомих незвичайним подарунком'
    text2 = 'Здивовуй навіть тих, хто думає, що їх вже не здивувати'
    btnText = 'ДЕТАЛЬНІШЕ'
  } else if (localStorage.language === 'US') {
    state1 = 'Happy'
    state2 = 'Surprise'
    text1 = 'Delight your friends, relatives or acquaintances with an unusual gift'
    text2 = `Surprise even those who think they've seen everything`
    btnText = 'More'
  }
    smoothscroll.polyfill();
    const testY = window.innerHeight;
    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: toggle,
      delay: 1000,
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
          }}>{state1}</h1>

          <p
          style={{
              fontSize: '18px',
              lineHeight: '130%',
              letterSpacing: '0.15em',
              marginTop:'16px',
              marginRight: '3.5vw',
              textAlign: 'right'
          }}>{text1}</p>
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
            onClick={()=> window.scrollTo({
              top: testY,
              behavior: "smooth"
          }) }
          >{btnText}</Button>
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
        }}>{state2}</h1>

        <p
        style={{
            fontSize: '18px',
            lineHeight: '130%',
            letterSpacing: '0.15em',
            marginTop:'16px',
            marginRight: '3.5vw',
            textAlign: 'right'
        }}>{text2}</p>
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
        onClick={()=> window.scroll({
            top: 730,
            behavior: "smooth"
        }) }
        >{btnText}</Button>
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

