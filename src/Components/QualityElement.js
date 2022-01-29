import React, { Component } from 'react';

class QualityElement extends Component {
    render() {
        const {
             name, text, mrgLeft, mrgRight, mrgTop, mrgBottom, placement, position
        } = this.props
      return (
        <div>
            <div 
            data-aos={placement} data-aos-anchor-placement={position}
            style={{
                width: '270px',
                height: '100px',
                marginLeft: mrgLeft,
                marginRight: mrgRight,
                borderRadius: '25px',
                WebkitBackdropFilter: 'blur(25px)',
                backdropFilter:'blur(25px)',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 50)',
                marginTop: mrgTop,
                marginBottom: mrgBottom
                // borderImage: 'linear-gradient(to right, red, blue) 27 100%'
                // borderImage: 'radial-gradient(137.5% 515.46% at 31.51% -37.5%, #FFFFFF 0%, rgba(255, 255, 255, 0.15) 100%)'
                // WebkitBorderImage: 'WebkitGradient(linear, left top, left bottom, from(#00abeb), to(#fff), color-stop(0.5, #fff), color-stop(0.5, #66cc00)) 21 30 30 21 repeat repeat'

            }}>
               
               <h6 style={{
                   marginTop: '24px',
                   fontSize: '18px',
                   lineHeight: '25px',
                   textAlign: 'center',
                   marginBottom: '0px'
               }}>
                   {name}
               </h6>

               <p style={{
                   width: '250px',
                   fontSize: '12px',
                   textAlign: 'center',
                   marginLeft: 'auto',
                   marginRight: 'auto',
                   lineHeight: '19px',
                   color: 'rgba(0, 0, 0, 0.5)',
               }}>
                   {text}
               </p>

            </div>
        </div>
      );
    }
}
export default QualityElement;