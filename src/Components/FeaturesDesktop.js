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
                Особенности
                </h2>
                
                {/* Features */}
                <div style={{
                    // display: 'inline-block',
                    marginBottom:'50px',
                    marginTop: '24px',
                    justifyContent: 'center',
                    display: 'flex',
                }}>

                    {/* Feature1 */}
                    <div style={{
                        display: 'inline-block',
                        marginLeft: '2vw',
                        marginRight:'2vw'
                        
                    }}>

                        <h5
                        style={{
                            fontSize: '18px',
                            lineHeight:'33px',
                            textAlign: 'center',
                        }}>
                            Эксклюзивность
                        </h5>

                        <p
                        style={{
                            width: '290px',
                            lineHeight: '150%',
                            textAlign: 'center',
                            fontSize: '16px'
                        }}
                        >
                            Все торты делаются 
                            вручную с индивидуальным 
                            подходом к каждому 
                            изделию
                        </p>

                    </div>

                    {/* Feature2 */}
                    <div style={{
                        display: 'inline-block',
                        marginLeft: '2vw',
                        marginRight:'2vw'
                    }}>

                        <h5
                        style={{
                            fontSize: '18px',
                            lineHeight:'33px',
                            textAlign: 'center',
                        }}>
                            Премиальное качество
                        </h5>

                        <p
                        style={{
                            width: '290px',
                            lineHeight: '150%',
                            textAlign: 'center',
                            fontSize: '16px'
                        }}
                        >
                            Использование только 
                            натуральных и лучших 
                            ингредиентов делает торты 
                            не только самыми 
                            красивыми, а и самыми 
                            полезными и вкусными в 
                            Украине и Европе
                        </p>

                    </div>

                    {/* Feature3 */}
                    <div style={{
                        display: 'inline-block',
                        marginLeft: '2vw',
                        marginRight:'2vw'
                    }}>

                        <h5
                        style={{
                            fontSize: '18px',
                            lineHeight:'33px',
                            textAlign: 'center',
                        }}>
                            Креативность
                        </h5>

                        <p
                        style={{
                            width: '290px',
                            lineHeight: '150%',
                            textAlign: 'center',
                            fontSize: '16px'
                        }}
                        >
                            Хочется чего-то 
                            удивительного, но не 
                            уверен что именно? Дай 
                            полную свободу нашей 
                            команде и будешь удивлен 
                            в двойне!
                        </p>

                    </div>


                </div>

            </div>
        </div>
      );
    }
}
export default CakesDesktop;