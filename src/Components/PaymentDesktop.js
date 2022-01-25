import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

export default class PaymentDesktop extends Component {
  render() {
    let sectionName = 'Оплата'
    let text1 = '50% предоплата'
    let text2 = '50% при получении'
    let text3 = 'Наличными'
    let text4 = 'Перевод на карту'
    let text5 = 'Банковский чек'
    let sub1 = 'Условия оплаты'
    let sub2 = 'Варианты оплаты'

    if (localStorage.language === 'RU') {
        sectionName = 'Оплата'
        text1 = '50% предоплата'
        text2 = '50% при получении'
        text3 = 'Наличными'
        text4 = 'Перевод на карту'
        text5 = 'Банковский чек'
        sub1 = 'Условия оплаты'
        sub2 = 'Варианты оплаты'
    } else if (localStorage.language === 'UA') {
        sectionName = 'Оплата'
        text1 = '50% передоплата'
        text2 = '50% при отриманні'
        text3 = 'Готівкою'
        text4 = 'Переклад на карту'
        text5 = 'Банківський чек'
        sub1 = 'Умови оплати'
        sub2 = 'Варіанти оплати'
    } else if (localStorage.language === 'US') {
        sectionName = 'Payment'
        text1 = '50% prepayment'
        text2 = '50% upon recieve'
        text3 = 'Cash'
        text4 = 'Transfer to the card'
        text5 = 'Bank cheque'
        sub1 = 'Terms of payment'
        sub2 = 'Types of payment'
    }
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
                    {sectionName}
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
                                    width: '180px', textAlign: 'center', fontSize: '14px',
                                    marginLeft: 'auto', marginRight: 'auto', paddingTop: '8px', 
                                    marginBottom: '0px', marginTop: '0px'
                                }}
                                >
                                    {text1}
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
                                    {text2}
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
                                    {sub1}
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
                                    {sub2}
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
                                    width: '180px', textAlign: 'center', fontSize: '14px',
                                    marginLeft: 'auto', marginRight: 'auto', paddingTop: '8px', 
                                    marginBottom: '0px', marginTop: '0px'
                                }}
                                >
                                    {text3}
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
                                    {text4}
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
                                    {text5}
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
