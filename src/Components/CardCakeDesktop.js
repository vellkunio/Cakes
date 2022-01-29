import React from 'react';
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

import "./styles.css";

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  

    export default function TestCard(parameters) {
        const configList = Object.keys(config);
        const ref = useRef(null);
        const [xys, set] = useState([0, 0, 1]);
        // const { preset } = useControls({
        //   preset: { value: "default", options: configList }
        // });
        const preset = { value: "default", options: configList }
        const props = useSpring({ xys, config: config[preset] });
      
        return (
          // <div className="ccard-main" ref={ref}>
            <animated.div ref={ref}
              className="ccard"
              style={{ transform: props.xys.to(trans), marginTop: '40px'}}
              onMouseLeave={() => set([0, 0, 1])}
              onMouseMove={(e) => {
                const rect = ref.current.getBoundingClientRect();
                set(calc(e.clientX, e.clientY, rect));
              }}
            >
                <h3
                style={{
                    margin: '0px',
                    marginTop: '24px',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}>{parameters.name}</h3>

                <img
                src={parameters.image} alt="Hearts"
                    style={{
                        // width: '50px',
                        height: '75px',
                        marginTop: '16px'
                    }}
                />

                <p
                style={{
                    fontSize: '12px',
                    lineHeight: '19px',
                    textAlign: 'center',
                    width: '170px',
                    marginLeft:'auto',
                    marginRight: 'auto',
                }}>
                    {parameters.text}
                </p>
            </animated.div>
            
          // </div>
        );
      }
