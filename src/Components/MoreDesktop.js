import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import phone from '../images/phone.png'
import messages from '../images/messages.png'
import email from '../images/email.png'
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import whatsapp from '../images/whatsapp.png'
import viber from '../images/viber.png'

export default class MoreDesktop extends Component {
  render() {
    return (
        <div 
        style={{
            marginTop: '50px'
        }}>

            <div>
            <Grid container spacing={2}>

                <Grid item xs={6} md={6}>
                <div style={{marginLeft: '100px'}}>
                    <h2 className='oswald'
                        style={{
                            letterSpacing: '0.15em',
                            fontSize: '48px',
                            marginBottom: '0px',
                            marginTop: '-50px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                            // marginBottom: '50px'
                        }}
                    >
                    Цены
                    </h2>
                    <p
                    style={{
                        width: '290px',
                        lineHeight: '150%',
                        textAlign: 'center',
                        fontSize: '16px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '40px'
                    }}
                    >
                        У нас нету единой цены 
                        потому, что каждое наше 
                        изделие - уникальное и 
                        делается на заказ, но Вы 
                        можете ознакомиться с 
                        ценами на уже сделанные 
                        ранее тортики в нашем 
                        инстаграм
                    </p>

                    <h2 className='oswald'
                        style={{
                            letterSpacing: '0.15em', fontSize: '48px', marginBottom: '0px', marginTop: '40px',
                            marginLeft: 'auto', marginRight: 'auto', marginBottom: '40px'
                        }}
                    >
                    Как получить?
                    </h2>

                    <div
                    style={{
                        alignItems: 'center', borderRadius: '15px', backgroundColor: '#E2C0BF',
                        // color: color,
                        display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                        paddingBottom: '8px', marginTop:'', marginBottom:'', marginLeft:'', fontSize: '18px',
                        marginLeft: '100px', marginRight: '100px',  marginBottom: '32px', WebkitBackdropFilter: 'blur(15px)',
                    }}
                    >
                    <p
                    style={{
                        width: '200px', textAlign: 'center', fontSize: '14px',
                        marginLeft: 'auto', marginRight: 'auto',
                    }}
                    >
                        Самовывоз из Одессы
                    </p>
                    </div>

                    <div
                    style={{
                        alignItems: 'center', borderRadius: '15px', backgroundColor: '#E2C0BF',
                        // color: color,
                        display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                        paddingBottom: '8px', marginTop:'', marginBottom:'', marginLeft:'', WebkitBackdropFilter: 'blur(15px)',
                        marginRight: '16px'
                    }}
                    >
                    <p
                    style={{
                        width: '200px', textAlign: 'center', fontSize: '14px',
                        marginLeft: 'auto', marginRight: 'auto',
                    }}
                    >
                        Доставка по Одесской области
                    </p>
                    </div>

                    <div
                    style={{
                        alignItems: 'center', borderRadius: '15px', backgroundColor: '#E2C0BF',
                        // color: color,
                        display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                        paddingBottom: '8px', marginTop:'', marginBottom:'', marginLeft:'', WebkitBackdropFilter: 'blur(15px)',
                        marginLeft: '16px'
                    }}
                    >
                    <p
                    style={{
                        width: '200px', textAlign: 'center', fontSize: '14px',
                        marginLeft: 'auto', marginRight: 'auto',
                    }}
                    >
                        Доставка по Украине (экстра)
                    </p>
                    </div>

                </div>
                </Grid>

                <Grid item xs={6} md={6}>
                <div style={{marginRight: '100px'}}>

                    <h2 className='oswald'
                        style={{
                            letterSpacing: '0.15em',
                            fontSize: '48px',
                            marginBottom: '0px',
                            marginTop: '-50px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '0px'
                        }}
                    >
                    Как заказать?
                    </h2>
                    
                <Grid container spacing={2}>
                    <Grid item xs={4} md={4} style={{marginTop: '40px'}}>
                        <div>

                            <p
                            style={{
                                width: '155px', textAlign: 'center', fontSize: '16px',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '0px'
                            }}
                            >
                                Позвонить нам
                            </p>

                            <img
                            src={phone} alt="inst"
                                style={{
                                    width: '167px',
                                    marginTop: '8px'
                                }}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4} md={4} style={{marginTop: '40px'}}>
                        <div>

                            <p
                            style={{
                                width: '155px', textAlign: 'center', fontSize: '16px',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '0px'
                            }}
                            >
                                Написать нам
                            </p>

                            <img
                            src={messages} alt="inst"
                                style={{
                                    width: '167px',
                                    marginTop: '8px'
                                }}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4} md={4} style={{marginTop: '40px'}}>
                        <div>

                            <p
                            style={{
                                width: '155px', textAlign: 'center', fontSize: '16px',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '0px'
                            }}
                            >
                                На почту
                            </p>

                            <img
                            src={email} alt="inst"
                                style={{
                                    width: '167px',
                                    marginTop: '8px'
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>

                <p
                            style={{
                                width: '155px', textAlign: 'center', fontSize: '16px',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: '48px', marginBottom: '0px'
                            }}
                            >
                                В соц. сетях
                            </p>
                    

                </div>

                <Grid container spacing={2}>
                    <Grid item xs={3} md={3} style={{marginTop: '40px', marginLeft: '-53px'}}>
                    <img
                    src={instagram} alt="inst"
                        style={{
                            width: '141px',
                            marginTop: '0px'
                        }}
                    />
                    </Grid>
                    <Grid item xs={3} md={3} style={{marginTop: '40px'}}>
                    <img
                    src={telegram} alt="inst"
                        style={{
                            width: '141px',
                            marginTop: '0px'
                        }}
                    />
                    </Grid>
                    <Grid item xs={3} md={3} style={{marginTop: '40px'}}>
                    <img
                    src={viber} alt="inst"
                        style={{
                            width: '141px',
                            marginTop: '0px'
                        }}
                    />
                    </Grid>
                    <Grid item xs={3} md={3} style={{marginTop: '40px'}}>
                    <img
                    src={whatsapp} alt="inst"
                        style={{
                            width: '141px',
                            marginTop: '0px'
                        }}
                    />
                    </Grid>
                </Grid>

                </Grid>
            
            </Grid>


            </div>

        </div>
    );
  }
}
