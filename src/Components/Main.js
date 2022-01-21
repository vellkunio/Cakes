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
import CompanyName from './CompanyName';

//rcc - for fast class creation

//todo
//ForWho Cards - make them alive, maybe click or hover                                  Done
//Свойства - добавить открытие этой штуки на наведение и туда влить воды и описание     Under Review
// for who animate on hover                                                             Under Review
//priced add from and to                                                                Done
//спейсинги между названиями глав                                                       
//add scroll effect when press More                                                     
//add actions for contact us buttons                                                    
//lower down Name of th company                                                         Done

class Main extends Component {
  render() {
    return (
      <div>
        <div className='mainDiv'>
          {/* <ChangeFrontImage2 styles={{zIndex: '10'}} /> */}
          {/* <ChangeFrontImage1 styles={{zIndex: '1'}}/> */}
          
          

          {/* <h1 className='oswald'
            style={{
              display: 'block',
              textAlign:'right',
              marginRight: '5.4vw',
              // marginRight: '78px',
              fontSize: '120px',
              letterSpacing: '0.15em',
              // marginTop: '320px',
              marginTop: '320px',
              zIndex: '10000'
            }}
          >
            ВАУ ТОРТ
          </h1> */}

          <CompanyName />

          <ChangeFrontPage />
          <DescriptionFrontPageDesktop />
          
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