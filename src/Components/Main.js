import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import ChangeFrontPage from './changeFrontPage.js';
import ChangeFrontImage1 from './changeFrontImage1.js';
import ChangeFrontImage2 from './changeFrontImage2.js';
import bgItem2 from '../images/bgItem2.png';

import DescriptionFrontPageDesktop from './descriptionFrontPageDesktop.js';
import AboutUsDesktop from './AboutUsDesktop';
import CakesDesktop from './CakesDesktop';
import FeaturesDesktop from './FeaturesDesktop';
import QualitiesDesktop from './QualitiesDesktop';
import ExamplesDesktop from './ExamplesDesktop';
import TypesDesktop from './TypesDesktop';
import ForWhoDesktop from './ForWhoDesktop';
import MoreDesktop from './MoreDesktop';
import PaymentDesktop from './PaymentDesktop';
import FooterDesktop from './FooterDesktop';
import BGPics from './BGPics';

//rcc - for fast class creation

class Main extends Component {
  render() {
    return (
      <div>
        <div className='mainDiv'>
          {/* <ChangeFrontImage2 styles={{zIndex: '10'}} /> */}
          {/* <ChangeFrontImage1 styles={{zIndex: '1'}}/> */}
          
          <ChangeFrontPage />
          <DescriptionFrontPageDesktop />

          <h1 className='oswald'
            style={{
              display: 'block',
              textAlign:'right',
              marginRight: '3.5vw',
              fontSize: '100px',
              letterSpacing: '0.15em',
              marginTop: '0px'
            }}
          >
            ВАУ ТОРТ
          </h1>
          
          <AboutUsDesktop />

          <BGPics />

          <CakesDesktop />

          <FeaturesDesktop />
          
          <QualitiesDesktop />

          <ExamplesDesktop />

          <TypesDesktop />

          <ForWhoDesktop />

          <MoreDesktop />

          <PaymentDesktop />

          <FooterDesktop />

        </div>
      </div>
    );
  }
}

export default Main