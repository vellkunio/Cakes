import React, { useState, useEffect } from 'react'
import { animated, config, useSpring } from '@react-spring/web'
import mainCake1 from '../images/mainCake1.png'
import { Filter } from '@material-ui/icons'

export default function ChangeFrontPage() {
    
    const styles = useSpring({
        loop: { reverse: true },
        from: { x: 0, y: 0, opacity: '100%', transform: 'scale(1)' },
        to: { x: 300, y: 100, opacity: '75%', transform: 'scale(0.75)', filter: 'blur(10)' },
        // from: { x: 0, opacity: '100%' },
        // to: { x: 400, opacity: '75%' },
        delay: 3000,
        // zIndex: '1'
        // config: { duration: 500 }
      })


    return(
        <div>

        {/* <div style={{ zIndex: 1}}> */}
            {/* <animated.div style={{...styles1}}> */}
            <animated.div style={{...styles}}>

            <img
            src={mainCake1} alt="Pink cake"
                style={{
                // display: 'block', 
                // marginLeft: 'auto', marginRight: 'auto', 
                // height: '600px',
                position: 'absolute', left: 0,
                height: '87.5vh'
                // height: open ? '50vh': '75vh'
                }}
            />

            </animated.div>
        {/* </div> */}

        </div>
    )




}