import React, { Component } from 'react'

export default class CakeTypeElementMobile extends Component {
    render() {
        let fillingWord = 'Начинка'
        let featureWord = 'Особенность'
        let extraWord = 'Дополнительно'
        let priceWord = 'Цена'

        if (localStorage.language === 'RU') {
            fillingWord = 'Начинка'
            featureWord = 'Особенность'
            extraWord = 'Дополнительно'
            priceWord = 'Цена'
          } else if (localStorage.language === 'UA') {
            fillingWord = 'Начинка'
            featureWord = 'Особливість'
            extraWord = 'Додатково'
            priceWord = 'Ціна'
          } else if (localStorage.language === 'US') {
            fillingWord = 'Filling'
            featureWord = 'Feature'
            extraWord = 'Extra'
            priceWord = 'Price'
          }

        const {
            name, inside, feature, extra, price, image, place, count
        } = this.props
        return (
            <div style={{marginBottom: '100px'}}>
                
                <div >

                    <div style={{
                        width: '320px', 
                        height: '210px',
                        // background: 'rgba(255, 255, 255, 0.15)',
                        background: 'rgba(150, 150, 150, 0.1)',
                        border: '1px solid rgba(0, 0, 0, 0.15)',
                        // boxSizing: 'border-box',
                        borderRadius: '25px',
                        WebkitBackdropFilter: 'blur(25px)', // maybe delete it
                        backdropFilter: 'blur(25px)',
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginTop: '180px',
                        // paddingTop: '200px'
                    }}>
                    {/* <div style={{
                        width: '420px', 
                        height: '210px',
                        background: 'rgba(103, 104, 171, 0.15)',
                        border: '1px solid #FFFFFF',
                        boxSizing: 'border-box',
                        borderRadius: '25px',
                        WebkitBackdropFilter: 'blur(25px)',
                        backdropFilter: 'blur(25px)',
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginTop: '180px',
                    }}> */}
                            {place === 'left' ? 
                                (
                                    count === '1' ? (
                                        <img
                                        src={image} alt="girl cake"
                                            style={{
                                                position: 'absolute',
                                                width: '140px',
                                                marginLeft: '-150px',
                                                marginTop: '-160px',
                                            }}
                                        />
                                    ) : (
                                        <img
                                        src={image} alt="heart"
                                            style={{
                                                position: 'absolute',
                                                width: '280px',
                                                marginLeft: '-220px',
                                                marginTop: '-230px'
                                            }}
                                        />
                                    )




                                    
                                ):(
                                    count === '3' ? (
                                    <img
                                    src={image} alt="goga cake"
                                        style={{
                                            position: 'absolute',
                                            width: '215px',
                                            marginLeft: '-200px',
                                            marginTop: '-220px'
                                        }}
                                    />
                                    ) : (
                                    <img
                                    src={image} alt="cube cake"
                                        style={{
                                            position: 'absolute',
                                            width: '160px',
                                            marginLeft: '-175px',
                                            marginTop: '-165px'
                                        }}
                                    />
                                    )
                                    
                                )
                            }

                        



                                    <h5
                                    style={{
                                        fontSize: '18px',
                                        lineHeight: '33px',
                                        textAlign: 'right',
                                        marginRight: '33px',
                                        marginTop: '22px',
                                        marginBottom: '0px'
                                    }}
                                >
                                    {name}
                                </h5>
                                

                        <p
                            style={{
                                textAlign: 'left',
                                marginLeft: '33px',
                                marginBottom: '8px',
                                fontSize: '13px'
                            }}
                        >
                            <b>{fillingWord}:</b> {inside}
                        </p>

                        <p
                            style={{
                                textAlign: 'left',
                                marginLeft: '33px',
                                marginTop: '0px',
                                marginBottom: '8px',
                                fontSize: '13px'
                            }}
                        >
                            <b>{featureWord}:</b> {feature}
                        </p>

                        <p
                            style={{
                                textAlign: 'left',
                                marginLeft: '33px',
                                marginTop: '0px',
                                marginBottom: '8px',
                                fontSize: '13px'
                            }}
                        >
                            <b>{extraWord}:</b> {extra}
                        </p>

                        <p
                            style={{
                                textAlign: 'right',
                                marginRight: '33px',
                                marginTop: '16px',
                                marginBottom: '0px',
                                fontSize:'12px'
                            }}
                        >
                            <b>{priceWord}:</b> {price}$
                        </p>

                    </div>
                    
                </div> 

            </div>
        )
    }
}
