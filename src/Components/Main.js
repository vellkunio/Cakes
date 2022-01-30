import React, { Component } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import AOS from 'aos';


import ChangeFrontPage from './changeFrontPage.js';
import ChangeFrontPageMobile from './ChangeFrontPageMobile.js';

import DescriptionFrontPageDesktop from './descriptionFrontPageDesktop.js';
import AboutUsDesktop from './AboutUsDesktop';
import CakesDesktop from './CakesDesktop';
import FeaturesDesktop from './FeaturesDesktop';
import FeaturesMobile from './FeaturesMobile';
import QualitiesDesktop from './QualitiesDesktop';
import QualitiesMobile from './QualitiesMobile';
import ExamplesDesktop from './ExamplesDesktop';
import TypesDesktop from './TypesDesktop';
import ForWhoDesktop from './ForWhoDesktop';
import MoreDesktop from './MoreDesktop';
import PaymentDesktop from './PaymentDesktop';
import FooterDesktop from './FooterDesktop';
import BGPics from './BGPics';
import CompanyName from './CompanyName';

import ReactCountryFlag from "react-country-flag"
//rcc - for fast class creation



class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
        language: 'RU'
    }
}

handleChange = (event) => {
  this.setState({
      language: event.target.value
  });
}

componentDidMount() {
  AOS.init();
  AOS.refresh();
}

// componentWillMount(){
//   if(this.state.language != 'US' || this.state.language != 'UA'){
//     this.setState({
//       language: 'RU'
//     });
//     console.log('will mount stateChange')
//     console.log(this.state.language)
//   }
// }
  render() {
    const windowWidth=window.screen.availWidth;
    // console.log(windowWidth);

    
    // this.setState({
    //   language: 'RU'
    // })

    //1. Check if localStorage is empty
    //2. If empty => assign RU || if notEmpty => assign this value to State


    // console.log(this.state.language)
    // console.log(' in render ')
    

    if (this.state.language === null){
      if (localStorage.getItem("language") === null){
      this.setState({
        language: 'RU'
        });
      }
    }

    // if (localStorage.getItem("language") != null){
    //   this.setState({
    //     language: this.state.language
    //   });
    // } 

    // if(this.state.language != 'US' || this.state.language != 'UA'){
    //   this.setState({
    //     language: 'RU'
    //   });
    // }
 
    localStorage.setItem('screenSize', windowWidth);
    
    localStorage.setItem('language', this.state.language);
    
    // console.log(this.state.language)
    // console.log(' end of render, after local storage set ')


    
    return (
      <div>
        <div className='mainDiv'>

          {/* todo */}
          {/* aos animations */}
          
          {/* toFix */}
          <Select
          style={{position: 'absolute', left: '20px',top: '20px',background: 'transparent'}}
          variant='standard' id="language" value={this.state.language} onChange={this.handleChange}

          >
            <MenuItem className="MenuItem" style={{display: 'block', textAlign: 'center', marginBottom: '5px'}} sx={{color: 'red'}} value={'RU'}>
              <ReactCountryFlag countryCode="RU" style={{width: '20px', height: '20px'}} svg />
            </MenuItem>

            <MenuItem style={{display: 'block', textAlign: 'center', marginBottom: '5px'}} value={'US'}>
              <ReactCountryFlag countryCode="US" style={{width: '20px', height: '20px'}} svg />
            </MenuItem>

            <MenuItem style={{display: 'block', textAlign: 'center'}} value={'UA'}>
              <ReactCountryFlag countryCode="UA" style={{width: '20px', height: '20px'}} svg />
            </MenuItem>
            
          </Select>

          
          <CompanyName/>

          {localStorage.screenSize > 600 ? (
            <ChangeFrontPage />
            ) : (
            <ChangeFrontPageMobile />
          )}

          {/* toCheck */}
          <DescriptionFrontPageDesktop/>
          
          
          <AboutUsDesktop />

          {/* todo */}
          <BGPics />

          
          <CakesDesktop />

          
          {localStorage.screenSize > 600 ? (
            <FeaturesDesktop />
            ) : (
            <FeaturesMobile />
          )}
          
          
          {localStorage.screenSize > 600 ? (
            <QualitiesDesktop />
            ) : (
            <QualitiesMobile />
          )}

          
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