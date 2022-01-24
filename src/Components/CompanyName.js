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

    return (
    <div>
        <h1 className='oswald'
            style={{
              display: 'block',
              textAlign:'right',
              marginRight: '5.4vw',
              // marginRight: '78px',
              fontSize: '120px',
              letterSpacing: '0.15em',
            //   marginTop: '320px',
            //   marginTop: '38.3vh',
              marginTop: '11vh',
              zIndex: '10000',
              opacity: '100%'
            }}
          >
            {companyName}
          </h1>
    </div>
    );
  }
}
