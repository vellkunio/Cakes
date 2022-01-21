import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

export default class PaymentDesktop extends Component {
  render() {
    return (
        <div style={{marginBottom: '100px'}}>
            <div>
                <h2 className='oswald'
                style={{
                    letterSpacing: '0.15em',
                    fontSize: '48px',
                    marginBottom: '0px'
                }}
                >
                    Оплата
                </h2>
            </div>

            <div style={{
                width: '936px',
                height: '202px',
                background: 'rgba(173, 221, 226, 0.25)',
                marginTop: '24px',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '25px',
                WebkitBackdropFilter: 'blur(5px)',
                backdropFilter: 'blur(5px)',
            }}>

                <div style={{height: '154px', width: '1px', 
                            background: 'rgba(255, 255, 255, 0.75)',
                            marginLeft: 'auto', marginRight: 'auto', marginTop: '22px', 
                            position: 'absolute', left: '50%'}}></div>

                <Grid container spacing={2}>

                    <Grid item xs={6} md={6}>

                        <Grid container spacing={2} style={{marginLeft: '10px'}}>

                            <Grid item xs={6} md={6}>
                            <div style={{
                            width: '200px',
                            height: '40px',
                            background: 'rgba(173, 221, 226, 0.25)',
                            WebkitBackdropFilter: 'blur(10px)',
                            borderRadius: '10px', marginTop: '40px', marginLeft: '10px'
                            }}>
                                <p
                                style={{
                                    width: '155px', textAlign: 'center', fontSize: '14px',
                                    marginLeft: 'auto', marginRight: 'auto', paddingTop: '8px', 
                                    marginBottom: '0px', marginTop: '0px'
                                }}
                                >
                                    50% предоплата
                                </p>
                            </div>
                            <div style={{
                            width: '200px',
                            height: '40px',
                            background: 'rgba(173, 221, 226, 0.25)',
                            WebkitBackdropFilter: 'blur(10px)',
                            borderRadius: '10px', marginTop: '32px', marginLeft: '10px'
                            }}>
                                <p
                                style={{
                                    width: '180px', textAlign: 'center', fontSize: '14px',
                                    marginLeft: 'auto', marginRight: 'auto', paddingTop: '8px', 
                                    marginBottom: '0px', marginTop: '0px'
                                }}
                                >
                                    50% при получении
                                </p>
                            </div>
                            </Grid>


                            <Grid item xs={6} md={6} style={{marginTop: '75px'}}>
                            <p
                                style={{
                                    width: '180px', textAlign: 'center', fontSize: '14px',
                                    marginLeft: 'auto', marginRight: 'auto', paddingTop: '8px', 
                                    marginBottom: '0px', marginTop: '0px'
                                }}
                                >
                                    Условия оплаты
                                </p>
                            </Grid>

                        </Grid>
                    
                        

                    </Grid>

                    <Grid item xs={6} md={6}>

                        <Grid container spacing={2} style={{marginRight: '10px'}}>

                            <Grid item xs={6} md={6} style={{marginTop: '75px'}}>
                            <p
                                style={{
                                    width: '210px', textAlign: 'center', fontSize: '14px',
                                    marginLeft: 'auto', marginRight: 'auto', paddingTop: '8px', 
                                    marginBottom: '0px', marginTop: '0px'
                                }}
                                >
                                    Варианты предоплаты
                                </p>
                            </Grid>

                            <Grid item xs={6} md={6}>
                            <div style={{
                            width: '200px',
                            height: '40px',
                            background: 'rgba(251, 230, 219, 0.5)',
                            WebkitBackdropFilter: 'blur(10px)',
                            borderRadius: '10px', marginTop: '10px', marginRight: '10px'
                            }}>
                                <p
                                style={{
                                    width: '155px', textAlign: 'center', fontSize: '14px',
                                    marginLeft: 'auto', marginRight: 'auto', paddingTop: '8px', 
                                    marginBottom: '0px', marginTop: '0px'
                                }}
                                >
                                    Наличными
                                </p>
                            </div>



                            <div style={{
                            width: '200px',
                            height: '40px',
                            background: 'rgba(251, 230, 219, 0.5)',
                            WebkitBackdropFilter: 'blur(10px)',
                            borderRadius: '10px', marginTop: '20px', marginRight: '10px'
                            }}>
                                <p
                                style={{
                                    width: '165px', textAlign: 'center', fontSize: '14px',
                                    marginLeft: 'auto', marginRight: 'auto', paddingTop: '8px', 
                                    marginBottom: '0px', marginTop: '0px'
                                }}
                                >
                                    Перевод на карту
                                </p>
                            </div>



                            <div style={{
                            width: '200px',
                            height: '40px',
                            background: 'rgba(251, 230, 219, 0.5)',
                            WebkitBackdropFilter: 'blur(10px)',
                            borderRadius: '10px', marginTop: '20px', marginRight: '10px'
                            }}>
                                <p
                                style={{
                                    width: '180px', textAlign: 'center', fontSize: '14px',
                                    marginLeft: 'auto', marginRight: 'auto', paddingTop: '8px', 
                                    marginBottom: '0px', marginTop: '0px'
                                }}
                                >
                                    Банковский чек
                                </p>
                            </div>
                            </Grid>


                            

                        </Grid>
                    
                        

                    </Grid>

                </Grid>

            </div>
        </div>
    )
  }
}
