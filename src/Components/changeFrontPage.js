import React, { useState, useEffect } from 'react'
import { useTransition, animated, config, useSpring } from '@react-spring/web'
import mainCake1 from '../images/mainCake1.png'
import mainCake2 from '../images/mainCake2.png'

export default function ChangeFrontPage() {
    
    // const [open, toggle] = useState(false);
    // const transitions = useTransition(open, null, {
    //     from: { width: '50px' },
    //     update: { width: '500px'},
    //     config: { duration: 1000 },
    //   })


    const styles1 = useSpring({
        loop: { reverse: true },
        from: { x: 0, y: 0, opacity: '100%', transform: 'scale(1)' },
        to: { x: 400, y: 100, opacity: '50%', transform: 'scale(0.75)' },
        // from: { x: 0, opacity: '100%' },
        // to: { x: 400, opacity: '75%' },
        delay: 5000,
        // zIndex: 3,
        // zIndex: '1'
        // config: { duration: 500 }
      },
      );

    const styles2 = useSpring({
        loop: { reverse: true },
        from: { x: 400, y: 100, opacity: '50%', transform: 'scale(0.75)' },
        to: { x: 0, y: 0, opacity: '100%', transform: 'scale(1)' },
        delay: 5000,
        // zIndex: '0'
        // config: { duration: 500 }
      })

    //   useEffect(() => {
    //     const t = setInterval(() => toggle(open => !open), 3000)
    //     return () => clearTimeout(t)
    //   }, [])
    
    

    return(
        <div style={{marginTop: '-150px',}}>


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
                height: '87.5vh',
                // height: open ? '50vh': '75vh'
                }}
            />

            </animated.div>
        {/* </div> */}
        {/* ))} */}


        {/* <div style={{ zIndex: 0}}> */}
            <animated.div style={{...styles2}}>

                <img
                src={mainCake2} alt="cake1"
                    style={{
                    // display: 'block', 
                    // marginLeft: 'auto', marginRight: 'auto', 
                    position: 'absolute', 
                    left: 0,
                    height: '87.5vh'
                    // height: '600px'
                    }}
                />

            </animated.div>
        {/* </div> */}




        </div>
    )




}