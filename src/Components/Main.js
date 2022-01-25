import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import ChangeFrontPage from './changeFrontPage.js';

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

import ReactCountryFlag from "react-country-flag"
//rcc - for fast class creation

//todo
//ForWho Cards - make them alive, maybe click or hover                                  Done
//Свойства - добавить открытие этой штуки на наведение и туда влить воды и описание     Under Review
// for who animate on hover                                                             Under Review
//priced add from and to                                                                Done
//спейсинги между названиями глав                                                       Done
//add scroll effect when press More                                                     
//add actions for contact us buttons                                                    Done
//lower down Name of th company                                                         Done

class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
        language: localStorage.language
    }
}

handleChange = (event) => {
  this.setState({
      language: event.target.value
  });
}
  render() {
    if (localStorage.getItem("language") === null){
      this.setState({
        language: 'RU'
      });
    }
    // if (localStorage.getItem("language") != null){
    //   this.setState({
    //     language: this.state.language
    //   });
    // } 
 
    localStorage.setItem('language', this.state.language);
    return (
      <div>
        <div className='mainDiv'>
          
          <Select
          style={{position: 'absolute',left: '20px',top: '20px',background: 'transparent'}}
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

          <ChangeFrontPage />
          <DescriptionFrontPageDesktop/>
          
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