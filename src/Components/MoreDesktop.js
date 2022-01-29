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
    let name1 = 'Цены'
    let name2 = 'Как получить?'
    let name3 = 'Как заказать?'
    let priceText = `У нас нету единой цены потому, что каждое наше изделие - уникальное и 
    делается на заказ, но Вы можете ознакомиться с ценами на уже сделанные ранее тортики в нашем 
    инстаграм, которые начинаются от 100`
    let get1 = 'Самовывоз из Одессы'
    let get2 = 'Доставка по Одесской области'
    let get3 = 'Доставка по Украине (дополнительно)'
    let subName1 = 'Позвонить нам'
    let subName2 = 'Написать нам'
    let subName3 = 'На почту'
    let subName4 = 'В социальных сетях'

    if (localStorage.language === 'RU') {
        name1 = 'Цены'
        name2 = 'Как получить?'
        name3 = 'Как заказать?'
        priceText = `У нас нету единой цены потому, что каждое наше изделие - уникальное и 
        делается на заказ, но Вы можете ознакомиться с ценами на уже сделанные ранее тортики в нашем 
        инстаграм, которые начинаются от 100`
        get1 = 'Самовывоз из Одессы'
        get2 = 'Доставка по Одесской области'
        get3 = 'Доставка по Украине (дополнительно)'
        subName1 = 'Позвонить нам'
        subName2 = 'Написать нам'
        subName3 = 'На почту'
        subName4 = 'В социальных сетях'
    } else if (localStorage.language === 'UA') {
        name1 = 'Ціни'
        name2 = 'Як отримати?'
        name3 = 'Як замовити?'
        priceText = `У нас немає єдиної ціни тому, що кожен наш виріб - унікальний і робиться на замовлення, 
        але Ви можете ознайомитися з цінами на зроблені раніше тортики в нашому інстаграмі, 
        які починаються від 100$`
        get1 = 'Самовивіз з Одеси'
        get2 = 'Доставка по Одеській області'
        get3 = 'Доставка по Україні (додатково)'
        subName1 = 'Зателефонувати нам'
        subName2 = 'Написати нам'
        subName3 = 'На пошту'
        subName4 = 'В соціальних мережах'
    } else if (localStorage.language === 'US') {
        name1 = 'Prices'
        name2 = 'How to get?'
        name3 = 'How to order?'
        priceText = `We do not have a single price because each of our products is unique and made individually, 
        but you can see the prices for cakes already made earlier on our instagram, which start from 100`
        get1 = 'Pick up in Odessa'
        get2 = 'Delivery within Odessa oblast'
        get3 = 'Delivery within Ukraine (extra)'
        subName1 = 'Call us'
        subName2 = 'Message us'
        subName3 = 'Email'
        subName4 = 'In social media'
    }

    let mrgTop = '700px'

    if(localStorage.screenSize > 1200){
        mrgTop = '430px'
    } else {
        mrgTop = '700px'
    }

    return (
        <div 
        style={{
            marginTop: '50px'
        }}>

            <div className='MOBILE'>
            <Grid container spacing={2} 
            style={{marginTop: mrgTop}}
            >

                <Grid item xs={12} md={6}>
                <div>
                    <h2 className='oswald'
                        style={{
                            letterSpacing: '0.15em',
                            fontSize: '48px',
                            marginBottom: '0px',
                            marginTop: '24px', // do not change or change together with 'how to order' section below
                            marginLeft: 'auto',
                            marginRight: 'auto'
                            // marginBottom: '50px'
                        }}
                    >
                    {name1}
                    </h2>
                    <p
                    style={{
                        width: '350px',
                        lineHeight: '150%',
                        textAlign: 'center',
                        fontSize: '16px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '40px'
                    }}
                    >
                        {priceText}
                    </p>

                    <h2 className='oswald'
                        style={{
                            letterSpacing: '0.15em', fontSize: '40px', marginBottom: '0px', marginTop: '40px',
                            marginLeft: 'auto', marginRight: 'auto', marginBottom: '40px'
                        }}
                    >
                    {name2}
                    </h2>
                    <Grid container spacing={2}>
                    <Grid item xs={12} lg={12}>
                    <div
                    style={{
                        alignItems: 'center', borderRadius: '15px', backgroundColor: 'rgba(247, 207, 186, 0.75)',
                        // color: color,
                        display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                        paddingBottom: '8px', marginLeft:'auto', fontSize: '18px',
                        marginBottom: '16px', marginRight: 'auto',
                        WebkitBackdropFilter: 'blur(15px)', border: '1px solid rgba(247, 207, 186, 1)',
                    }}
                    >
                    <p
                    style={{
                        width: '200px', textAlign: 'center', fontSize: '14px',
                        marginLeft: 'auto', marginRight: 'auto',
                    }}
                    >
                        {get1}
                    </p>
                    </div>
                    </Grid>

                    <Grid item xs={12} md={4} lg={6}>
                    <div
                    style={{
                        alignItems: 'center', borderRadius: '15px', backgroundColor: 'rgba(247, 207, 186, 0.75)',
                        // color: color,
                        display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                        paddingBottom: '8px', marginLeft:'auto', WebkitBackdropFilter: 'blur(15px)', 
                        marginRight: 'auto', border: '1px solid rgba(247, 207, 186, 1)', marginBottom: '16px'
                    }}
                    >
                    <p
                    style={{
                        width: '200px', textAlign: 'center', fontSize: '14px',
                        marginLeft: 'auto', marginRight: 'auto',
                    }}
                    >
                        {get2}
                    </p>
                    </div>
                    </Grid>

                    <Grid item xs={12} md={4} lg={6}>
                    <div
                    style={{
                        alignItems: 'center', borderRadius: '15px', backgroundColor: 'rgba(247, 207, 186, 0.75)',
                        // color: color,
                        display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                        paddingBottom: '8px', marginLeft:'auto', WebkitBackdropFilter: 'blur(15px)',
                        marginLeft: 'auto', border: '1px solid rgba(247, 207, 186, 1)',
                    }}
                    >
                    <p
                    style={{
                        width: '200px', textAlign: 'center', fontSize: '14px',
                        marginLeft: 'auto', marginRight: 'auto',
                    }}
                    >
                        {get3}
                    </p>
                    </div>
                    </Grid>
                </Grid>

                </div>
                </Grid>

                <Grid item xs={12} md={6}>
                <div>

                    <h2 className='oswald'
                        style={{
                            letterSpacing: '0.15em',
                            fontSize: '40px',
                            marginBottom: '0px',
                            marginTop: '24px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: '0px'
                        }}
                    >
                    {name3}
                    </h2>
                    
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} style={{marginTop: '40px'}}>
                        <div>

                            <p
                            style={{
                                width: '155px', textAlign: 'center', fontSize: '16px',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '0px'
                            }}
                            >
                                {subName1}
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
                    <Grid item xs={6} md={4} style={{marginTop: '40px'}}>
                        <div>

                            <p
                            style={{
                                width: '155px', textAlign: 'center', fontSize: '16px',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '0px'
                            }}
                            >
                                {subName2}
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
                    <Grid item xs={6} md={4} style={{marginTop: '40px'}}>
                        <div>

                            <p
                            style={{
                                width: '155px', textAlign: 'center', fontSize: '16px',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: '0px', marginBottom: '0px'
                            }}
                            >
                                {subName3}
                            </p>

                            <a href="mailto:ksenia79@ukr.net">
                            <img
                            src={email} alt="email"
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
                                width: '300px', textAlign: 'center', fontSize: '16px',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: '40px', marginBottom: '0px'
                            }}
                            >
                                {subName4}
                            </p>
                    

                </div>

                <Grid container spacing={2}>
                    <Grid item xs={6} md={3} style={{marginTop: '40px'}}>
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
                    <Grid item xs={6} md={3} style={{marginTop: '40px'}}>
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
                    <Grid item xs={6} md={3} style={{marginTop: '40px'}}>
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
                    <Grid item xs={6} md={3} style={{marginTop: '40px'}}>
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


                //     <div
                //     style={{
                //         alignItems: 'center', borderRadius: '15px', backgroundColor: 'rgba(247, 207, 186, 0.75)',
                //         // color: color,
                //         display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                //         paddingBottom: '8px', marginLeft:'auto', fontSize: '18px',
                //         marginBottom: '32px', marginRight: 'auto',
                //         WebkitBackdropFilter: 'blur(15px)', border: '1px solid rgba(247, 207, 186, 1)',
                //     }}
                //     >
                //     <p
                //     style={{
                //         width: '200px', textAlign: 'center', fontSize: '14px',
                //         marginLeft: 'auto', marginRight: 'auto',
                //     }}
                //     >
                //         {get1}
                //     </p>
                //     </div>

                //     <div
                //     style={{
                //         alignItems: 'center', borderRadius: '15px', backgroundColor: 'rgba(247, 207, 186, 0.75)',
                //         // color: color,
                //         display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                //         paddingBottom: '8px', marginLeft:'auto', WebkitBackdropFilter: 'blur(15px)', 
                //         marginRight: 'auto', border: '1px solid rgba(247, 207, 186, 1)', marginBottom: '32px'
                //     }}
                //     >
                //     <p
                //     style={{
                //         width: '200px', textAlign: 'center', fontSize: '14px',
                //         marginLeft: 'auto', marginRight: 'auto',
                //     }}
                //     >
                //         {get2}
                //     </p>
                //     </div>

                //     <div
                //     style={{
                //         alignItems: 'center', borderRadius: '15px', backgroundColor: 'rgba(247, 207, 186, 0.75)',
                //         // color: color,
                //         display: 'inline-block', paddingLeft: '33px', paddingRight: '33px', paddingTop: '8px',
                //         paddingBottom: '8px', marginLeft:'auto', WebkitBackdropFilter: 'blur(15px)',
                //         marginLeft: 'auto', border: '1px solid rgba(247, 207, 186, 1)',
                //     }}
                //     >
                //     <p
                //     style={{
                //         width: '200px', textAlign: 'center', fontSize: '14px',
                //         marginLeft: 'auto', marginRight: 'auto',
                //     }}
                //     >
                //         {get3}
                //     </p>
                //     </div>

                // </div>