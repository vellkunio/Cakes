import React, { useState, useEffect } from 'react'
import { animated, config, useSpring } from '@react-spring/web'
import mainCake2 from '../images/mainCake2.png'

export default function ChangeFrontPage() {

    const styles = useSpring({
        loop: { reverse: true },
        from: { x: 300, y: 100, opacity: '75%', transform: 'scale(0.75)' },
        to: { x: 0, y: 0, opacity: '100%', transform: 'scale(1)' },
        delay: 3000,
        // zIndex: '0'
        // config: { duration: 500 }
      })


    return(
        <div>

            {/* <animated.div style={{...styles2}}> */}
            <animated.div style={{...styles}}>

                <img
                src={mainCake2} alt="cake1"
                    style={{
                    // display: 'block', 
                    // marginLeft: 'auto', marginRight: 'auto', 
                    position: 'absolute', left: 0,
                    height: '87.5vh'
                    // height: '600px'
                    }}
                />

            </animated.div>
        {/* </div> */}




        </div>
    )




}