import React, { useState, useEffect } from 'react'
import { useTransition, animated, config, useSpring } from '@react-spring/web'
import mainCake1 from '../images/mainCake1.png'
import mainCake2 from '../images/mainCake2.png'

export default function ChangeFrontPageMobile() {

    const styles1 = useSpring({
        loop: { reverse: true },
        from: { x: -60, y: 0, opacity: '100%', transform: 'scale(1)' },
        to: { x: 200, y: 100, opacity: '50%', transform: 'scale(0.75)' },
        delay: 5000,
      },
      );

    const styles2 = useSpring({
        loop: { reverse: true },
        from: { x: 200, y: 100, opacity: '50%', transform: 'scale(0.75)' },
        to: { x: -60, y: 0, opacity: '100%', transform: 'scale(1)' },
        delay: 5000,
      })


    return(
        <div style={{marginTop: '-90px',}}>


        {/* {transitions((open) => ( */}

        {/* <div style={{ zIndex: 1}}> */}
            <animated.div style={{...styles1}}>

            <img
            src={mainCake1} alt="Pink cake"
                style={{
                // display: 'block', 
                // marginLeft: 'auto', marginRight: 'auto', 
                // height: '600px',
                position: 'absolute', 
                left: 0,
                // height: '87.5vh',
                // width: '58vw',
                width: '400px',
                // width: imageWidth,
                // height: open ? '50vh': '75vh'
                }}
            />

            </animated.div>
        {/* </div> */}
        {/* ))} */}


        {/* <div style={{ zIndex: 0}}> */}
            <animated.div style={{...styles2}}>

                <img
                src={mainCake2} alt="white cake"
                    style={{
                    // display: 'block', 
                    // marginLeft: 'auto', marginRight: 'auto', 
                    position: 'absolute', 
                    left: 0,
                    // height: '87.5vh',
                    // width: '58vw'
                    width: '400px'
                    // width: imageWidth
                    // height: '600px'
                    }}
                />

            </animated.div>
        {/* </div> */}




        </div>
    )




}