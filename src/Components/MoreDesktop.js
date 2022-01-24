import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import phone from '../images/phone.png'
import messages from '../images/messages.png'
import email from '../images/email.png'
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import whatsapp from '../images/whatsapp.png'
import tiktok from '../images/tiktok.png'

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
                        инстаграм, которые 
                        начинаются от 100$
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
                        alignItems: 'center', borderRadius: '15px', backgroundColor: 'rgba(247, 207, 186, 0.75)',
                        // color: color,
                        display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                        paddingBottom: '8px', marginTop:'', marginBottom:'', marginLeft:'', fontSize: '18px',
                        marginLeft: '100px', marginRight: '100px',  marginBottom: '32px', 
                        WebkitBackdropFilter: 'blur(15px)', border: '1px solid rgba(247, 207, 186, 1)',
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
                        alignItems: 'center', borderRadius: '15px', backgroundColor: 'rgba(247, 207, 186, 0.75)',
                        // color: color,
                        display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                        paddingBottom: '8px', marginTop:'', marginBottom:'', marginLeft:'', WebkitBackdropFilter: 'blur(15px)',
                        marginRight: '16px', border: '1px solid rgba(247, 207, 186, 1)',
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
                        alignItems: 'center', borderRadius: '15px', backgroundColor: 'rgba(247, 207, 186, 0.75)',
                        // color: color,
                        display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                        paddingBottom: '8px', marginTop:'', marginBottom:'', marginLeft:'', WebkitBackdropFilter: 'blur(15px)',
                        marginLeft: '16px', border: '1px solid rgba(247, 207, 186, 1)',
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

                            <a href="tel:+12262241256">
                            <img
                            src={phone} alt="Call icon"
                                style={{
                                    width: '167px',
                                    marginTop: '8px'
                                }}
                            />
                            </a>
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

                            <a href="sms:+380671272761&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5">
                            <img
                            src={messages} alt="Message icon"
                                style={{
                                    width: '167px',
                                    marginTop: '8px'
                                }}
                            />
                            </a>
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

                            <a href="mailto:ksenia79@ukr.net">
                            <img
                            src={email} alt="inst"
                                style={{
                                    width: '167px',
                                    marginTop: '8px'
                                }}
                            />
                            </a>
                        </div>
                    </Grid>
                </Grid>

                <p
                            style={{
                                width: '155px', textAlign: 'center', fontSize: '16px',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: '75px', marginBottom: '0px'
                            }}
                            >
                                В соц. сетях
                            </p>
                    

                </div>

                <Grid container spacing={2}>
                    <Grid item xs={3} md={3} style={{marginTop: '40px', marginLeft: '-53px'}}>
                    <a href="https://www.instagram.com/oksanavilkun/" target="_blank">
                    <img
                    src={instagram} alt="instagram"
                        style={{
                            width: '141px',
                            marginTop: '0px'
                        }}
                    />
                    </a>
                    </Grid>
                    <Grid item xs={3} md={3} style={{marginTop: '40px'}}>
                    <a href="https://t.me/vellkunio" target="_blank">
                    <img
                    src={telegram} alt="telegram"
                        style={{
                            width: '141px',
                            marginTop: '0px'
                        }}
                    />
                    </a>
                    </Grid>
                    <Grid item xs={3} md={3} style={{marginTop: '40px'}}>
                    <a href="https://www.tiktok.com/@pp_s_ksushey" target="_blank">
                    <img
                    src={tiktok} alt="tiktok"
                        style={{
                            width: '141px',
                            marginTop: '0px'
                        }}
                    />
                    </a>
                    </Grid>
                    <Grid item xs={3} md={3} style={{marginTop: '40px'}}>
                    <a href="https://wa.me/380671272761?text=Здравствуйте!" target="_blank">
                    <img
                    src={whatsapp} alt="whatsapp"
                        style={{
                            width: '141px',
                            marginTop: '0px'
                        }}
                    />
                    </a>
                    </Grid>
                </Grid>

                </Grid>
            
            </Grid>


            </div>

        </div>
    );
  }
}
