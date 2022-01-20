import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import phones from '../images/phones.png'

class ExamplesDesktop extends Component {
    render() {
      return (
        <div style={{marginTop: '40px'}}>

            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <img
                    src={phones} alt="inst"
                        style={{
                            // width: '50px',
                            height: '450px',
                            marginTop: '16px',
                            marginLeft: '200px'
                        }}
                    />
                </Grid>


                <Grid item xs={6} md={6}>
                    <div style={{marginTop: '120px', marginRight: '200px'}}>
                        <h2 className='oswald'
                            style={{
                                letterSpacing: '0.15em',
                                fontSize: '48px',
                                marginBottom: '0px'
                            }}
                        >Примеры</h2>

                        <p
                            style={{
                                fontSize:'18px',
                                lineHeight: '30px',
                                letterSpacing: '0.15em',
                                width:'400px',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}
                        >
                            Смотри что уже получили 
                            сотни людей в нашем 
                            инстаграм по клику на 
                            телефоны слева
                        </p>
                    </div>
                </Grid>

            </Grid>


            

            
        </div>
      );
    }
}
export default ExamplesDesktop;