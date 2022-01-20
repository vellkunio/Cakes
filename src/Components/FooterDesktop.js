import React, { Component } from 'react';
import instagram from '../images/instagram.png';

export default class FooterDesktop extends Component {
  render() {
    return (

        <div>
            <div style={{
                borderRadius: '10px 10px 0px 0px',
                background: 'rgba(193, 194, 219, 0.75)',
                width: '100%',
                height: '100px'
            }}>

            <img
            src={instagram} alt="inst"
                style={{
                    position: 'absolute',
                    height: '50px',
                    marginTop: '8px',
                    left: '100px',
                    marginTop: '25px'
                }}
            />

            

            <p
            style={{
                textAlign: 'right', fontSize: '14px',
                // marginLeft: 'auto', marginRight: 'auto', 
                marginRight: '250px', paddingTop: '24px',
                marginBottom: '0px', marginTop: '0px'
            }}
            >
                Все права защищены и принадлежат ВАУ ТОРТ @ 2021-2022
            </p>

            <p
            style={{
                textAlign: 'right', fontSize: '14px',
                // marginLeft: 'auto', marginRight: 'auto', 
                marginRight: '250px', paddingTop: '16px',
                marginBottom: '0px', marginTop: '0px', fontWeight: '400'
            }}
            >
                Сделано <a href="https://vilkun.software/">Vellkunio</a>
            </p>



            </div>
            

        </div>

    )
  }
}
