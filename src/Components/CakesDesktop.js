import React, { Component } from 'react';
import hearts from '../images/hearts.png'
import ghost from '../images/ghost.png'
import girl from '../images/girl.png'
import boy from '../images/boy.png'


class CakesDesktop extends Component {
    render() {
      return (
        <div>
            <div style={{marginTop: '5vh'}}>
                
            <h2 className='oswald'
                    style={{
                        letterSpacing: '0.15em',
                        fontSize: '48px',
                        marginBottom: '0px'
                    }}
                >
                Торты
                </h2>
                
                {/* Cakes */}
                <div style={{
                    display: 'inline-block',
                    // marginBottom:'50px',
                    marginTop: '24px'
                }}>

                    {/* Cake1 */}
                    <div style={{
                        display: 'inline-block',
                        height: '255px',
                        width: '200px',
                        background: 'rgba(255, 255, 255, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
                        borderRadius: '15px',
                        WebkitBackdropFilter: 'blur(10px)',
                        marginRight: '2vw',
                        marginLeft: '2vw',
                    }}>

                        <h3
                        style={{
                            margin: '0px',
                            marginTop: '24px',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}>Свадебный</h3>

                        <img
                        src={hearts} alt="Hearts"
                            style={{
                                // width: '50px',
                                height: '75px',
                                marginTop: '16px'
                            }}
                        />

                        <p
                        style={{
                            fontSize: '12px',
                            lineHeight: '19px',
                            textAlign: 'center',
                            width: '170px',
                            marginLeft:'auto',
                            marginRight: 'auto',
                        }}>
                            Идеальный торт для 
                            самого важного 
                            события в жизни 
                            двух сердец
                        </p>
                    </div>


                    {/* Cake2 */}
                    <div style={{
                        display: 'inline-block',
                        height: '255px',
                        width: '200px',
                        background: 'rgba(255, 255, 255, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
                        borderRadius: '15px',
                        WebkitBackdropFilter: 'blur(10px)',
                        marginRight: '2vw',
                        marginLeft: '2vw',
                    }}>

                        <h3
                        style={{
                            margin: '0px',
                            marginTop: '24px',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}>Детский</h3>

                        <img
                        src={ghost} alt="Ghost"
                            style={{
                                height: '75px',
                                marginTop: '16px'
                            }}
                        />

                        <p
                        style={{
                            fontSize: '12px',
                            lineHeight: '19px',
                            textAlign: 'center',
                            width: '170px',
                            marginLeft:'auto',
                            marginRight: 'auto',
                        }}>
                            Что может быть 
                            лучше чем 
                            счастливая улыбка 
                            ребенка?
                        </p>
                    </div>


                    {/* Cake3 */}
                    <div style={{
                        display: 'inline-block',
                        height: '255px',
                        width: '200px',
                        background: 'rgba(255, 255, 255, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
                        borderRadius: '15px',
                        WebkitBackdropFilter: 'blur(10px)',
                        marginRight: '2vw',
                        marginLeft: '2vw',
                    }}>

                        <h3
                        style={{
                            margin: '0px',
                            marginTop: '24px',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}>Женский</h3>

                        <img
                        src={girl} alt="Girl"
                            style={{
                                height: '75px',
                                marginTop: '16px',
                                marginLeft: '15px'
                            }}
                        />

                        <p
                        style={{
                            fontSize: '12px',
                            lineHeight: '19px',
                            textAlign: 'center',
                            width: '170px',
                            marginLeft:'auto',
                            marginRight: 'auto',
                        }}>
                            Любая девушка 
                            будет в восторге от 
                            подарка сделанного 
                            специально для неё
                        </p>
                    </div>


                    {/* Cake4 */}
                    <div style={{
                        display: 'inline-block',
                        height: '255px',
                        width: '200px',
                        background: 'rgba(255, 255, 255, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
                        borderRadius: '15px',
                        WebkitBackdropFilter: 'blur(10px)',
                        marginRight: '2vw',
                        marginLeft: '2vw',
                    }}>

                        <h3
                        style={{
                            margin: '0px',
                            marginTop: '24px',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}>Мужской</h3>

                        <img
                        src={boy} alt="Boy"
                            style={{
                                height: '75px',
                                marginTop: '16px',
                                marginLeft: '15px'
                            }}
                        />

                        <p
                        style={{
                            fontSize: '12px',
                            lineHeight: '19px',
                            textAlign: 'center',
                            width: '170px',
                            marginLeft:'auto',
                            marginRight: 'auto',
                        }}>
                            По-настоящему 
                            солидный и 
                            раскошый торт для 
                            мужчин
                        </p>
                    </div>

                </div>

            </div>
        </div>
      );
    }
}
export default CakesDesktop;