import React, { Component } from 'react';

export default class CompanyName extends Component {
  render() {
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
            ВАУ ТОРТ
          </h1>
    </div>
    );
  }
}
