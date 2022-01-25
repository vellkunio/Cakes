import React, { Component } from 'react';
import instagram from '../images/instagram.png';

export default class FooterDesktop extends Component {
  render() {
    let text1 = 'Все права защищены и принадлежат ВАУ ТОРТ @ 2021-2022'
    let text2 = 'Сделано'

    if (localStorage.language === 'RU') {
        text1 = 'Все права защищены и принадлежат ВАУ ТОРТ @ 2021-2022'
        text2 = 'Сделано'
    } else if (localStorage.language === 'UA') {
        text1 = 'Всі права захищені та належать ВАУ ТОРТ @ 2021-2022'
        text2 = 'Зроблено'
    } else if (localStorage.language === 'US') {
        text1 = 'All rights reserved and owned by WOW CAKE @ 2021-2022'
        text2 = 'Made by'
    }
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
                {text1}
            </p>

            <p
            style={{
                textAlign: 'right', fontSize: '14px',
                // marginLeft: 'auto', marginRight: 'auto', 
                marginRight: '250px', paddingTop: '16px',
                marginBottom: '0px', marginTop: '0px', fontWeight: '400'
            }}
            >
                {text2} <a href="https://vilkun.software/">Vellkunio</a>
            </p>



            </div>
            

        </div>

    )
  }
}
