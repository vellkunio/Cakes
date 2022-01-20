import React, { Component } from 'react';
import bgCake1 from '../images/bgCake1.png';
import bgCake2 from '../images/bgCake2.png';
import bgCake3 from '../images/bgCake3.png';
import bgCake4 from '../images/bgCake4.png';
import bgItem1 from '../images/bgItem1.png';
import bgItem2 from '../images/bgItem2.png';

export default class BGPics extends Component {
  render() {
    return (
        <div>

            <img
            src={bgCake1} alt="background picture"
                style={{
                    position: 'absolute',
                    width: '680px',
                    marginTop: '-130px',
                    right: '0px',
                    zIndex: '-5'
                }}
            />
            <img
            src={bgCake2} alt="background picture"
                style={{
                    position: 'absolute',
                    width: '650px',
                    marginTop: '670px',
                    left: '0px',
                    zIndex: '-5'
                }}
            />
            <img
            src={bgItem1} alt="background item"
                style={{
                    position: 'absolute',
                    width: '250px',
                    marginTop: '920px',
                    right: '120px',
                    zIndex: '-5'
                }}
            />
            <img
            src={bgCake3} alt="background picture"
                style={{
                    position: 'absolute',
                    width: '650px',
                    marginTop: '1800px',
                    right: '0px',
                    zIndex: '-5',
                    // filter: 'blur(2px)'
                }}
            />
            <img
            src={bgCake4} alt="background picture"
                style={{
                    position: 'absolute',
                    width: '600px',
                    marginTop: '2710px',
                    left: '0px',
                    zIndex: '-5',
                    // filter: 'blur(2px)'
                }}
            />
            <img
            src={bgItem2} alt="background item"
                style={{
                    position: 'absolute',
                    width: '400px',
                    marginTop: '4028px',
                    right: '0',
                    zIndex: '-5'
                }}
            />

            {/* Background Elipses */}

            {/* <div style={{
                width: '1000px',
                height: '1000px',
                background: 'rgba(133, 159, 148, 0.5)',
                borderRadius: '100%', position: 'absolute', zIndex: '-5',
                top: '-250px',
                left: '-150px',
                right: 'auto',
                filter: 'blur(50px)', WebkitFilter: 'blur(50px)',
            }}></div>

            <div style={{
                width: '1000px',
                height: '1000px',
                background: 'rgba(211, 146, 126, 0.5)',
                borderRadius: '100%', position: 'absolute', zIndex: '-4',
                top: '-250px',
                left: '700px',
                right: 'auto',
                filter: 'blur(50px)', WebkitFilter: 'blur(50px)',
                overflowX: 'hidden'
            }}></div> */}

            <div style={{
                height:'130vh',
                width: '100vw',
                // backgroundColor: 'blue',
                backgroundImage: 
                `linear-gradient(to bottom, rgba(211, 146, 126, 0.5), rgba(133, 159, 148, 0.5), #FEFDFB), 
                linear-gradient(to bottom right, rgba(103, 104, 171, 0.5), rgba(133, 159, 148, 0))`,
                position: 'absolute',
                top: '0px',
                zIndex: '-6'
            }}></div>

            <div style={{
                width: '700px',
                height: '700px',
                background: 'rgba(211, 146, 126, 0.15)',
                borderRadius: '100%', position: 'absolute', zIndex: '-6',
                top: '1700px',
                right: '100px',
                left: 'auto',
                filter: 'blur(50px)', WebkitFilter: 'blur(50px)',
            }}></div>

            <div style={{
                width: '600px',
                height: '600px',
                background: 'rgba(103, 104, 171, 0.2)',
                borderRadius: '100%', position: 'absolute', zIndex: '-6',
                top: '2150px',
                left: '130px',
                right: 'auto',
                filter: 'blur(50px)', WebkitFilter: 'blur(50px)',
            }}></div>
            <div style={{
                width: '700px',
                height: '700px',
                background: 'rgba(133, 159, 148, 0.15)',
                borderRadius: '100%', position: 'absolute', zIndex: '-6',
                top: '3000px',
                left: '0px',
                right: 'auto',
                filter: 'blur(50px)', WebkitFilter: 'blur(50px)',
            }}></div>
            <div style={{
                width: '500px',
                height: '500px',
                background: 'rgba(133, 159, 148, 0.15)',
                borderRadius: '100%', position: 'absolute', zIndex: '-6',
                top: '3700px',
                left: 'auto',
                right: '100px',
                filter: 'blur(50px)', WebkitFilter: 'blur(50px)',
            }}></div>
            

        </div>
    )
  }
}
