import React, { Component } from 'react';

export default class CompanyName extends Component {
  render() {

    // const {
    //   lng
    // } = this.props
    let companyName = 'ВАУ ТОРТ'
    
    if (localStorage.language === 'RU') {
      companyName = 'ВАУ ТОРТ';
    } else if (localStorage.language === 'UA') {
      companyName = 'ВАУ ТОРТ';
    } else if (localStorage.language === 'US') {
      companyName = 'WOW CAKE'
    }
    
    let fontSize = '120px'
    let mgnTop = '5.4vw'
    let wdth = ''

    if(localStorage.screenSize > 1200){
      fontSize = '120px'
      mgnTop = '5.4vw'
      wdth = ''
    } else if(localStorage.screenSize <= 1200 && localStorage.screenSize > 600){
      fontSize = '80px'
      mgnTop = '5.4vw'
      wdth = ''
    } else {
      fontSize = '60px'
      mgnTop = '5.4vw'
      wdth = '50%'
    }

    return (
    <div style={{textAlign: 'right'}}>
        <h1 className='oswald'
            style={{
              display: 'inline-block',
              textAlign:'right',
              marginRight: '5.4vw',
              // marginRight: '78px',
              fontSize: fontSize,
              letterSpacing: '0.15em',
            //   marginTop: '320px',
            //   marginTop: '38.3vh',
              marginTop: mgnTop,
              zIndex: '10000',
              opacity: '100%',
              width: wdth
            }}
          >
            {companyName}
          </h1>
    </div>
    );
  }
}
