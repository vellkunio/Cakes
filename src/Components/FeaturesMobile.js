import React, { Component } from 'react';


class CakesDesktop extends Component {
    render() {
        let sectionName = 'Особенности'
        let name1 = 'Эксклюзивность'
        let name2 = 'Премиальное качество'
        let name3 = 'Креативность'
        let text1 = 'Все торты делаются вручную с индивидуальным подходом к каждому изделию'
        let text2 = `Использование только натуральных и лучших ингредиентов делает торты 
            не только самыми красивыми, а и самыми полезными и вкусными в Украине и Европе`
        let text3 = `Хочется чего-то удивительного, но не уверен что именно? Дай 
            полную свободу нашей команде и будешь удивлен в двойне!`

        if (localStorage.language === 'RU') {
            sectionName = 'Особенности'
            name1 = 'Эксклюзивность'
            name2 = 'Премиальное качество'
            name3 = 'Креативность'
            text1 = 'Все торты делаются вручную с индивидуальным подходом к каждому изделию'
            text2 = `Использование только натуральных и лучших ингредиентов делает торты 
                не только самыми красивыми, а и самыми полезными и вкусными в Украине и Европе`
            text3 = `Хочется чего-то удивительного, но не уверен что именно? Дай 
                полную свободу нашей команде и будешь удивлен в двойне!`
        } else if (localStorage.language === 'UA') {
            sectionName = 'Особливості'
            name1 = 'Ексклюзивність'
            name2 = 'Преміальна якість'
            name3 = 'Креативність'
            text1 = 'Всі торти робляться вручну з індивідуальним підходом до кожного виробу.'
            text2 = `Використання тільки натуральних та кращих інгредієнтів робить торти 
                не тільки найкрасивішими, а й найсмачнішими в Україні та Європі.`
            text3 = `Хочеться чогось дивовижного, але не впевнений, що саме? Дай повну 
                свободу нашій команді і будеш здивований у двійні!`
        } else if (localStorage.language === 'US') {
            sectionName = 'Features'
            name1 = 'Exclusive'
            name2 = 'Premium quality'
            name3 = 'Creativity'
            text1 = 'All cakes are made by hand with an individual approach to each product'
            text2 = `Using only natural and best ingredients makes cakes not only the most beautiful, 
                but also the most healthy and delicious in Ukraine and Europe`
            text3 = `Looking for something amazing but not sure what exactly? Give complete freedom to our 
                team and you will be doubly surprised!`
        }
      return (
        <div>
            <div style={{marginTop: '64px'}}>
                
            <h2 className='oswald'
                    style={{
                        letterSpacing: '0.15em',
                        fontSize: '48px',
                        marginBottom: '0px'
                    }}
                >
                {sectionName}
                </h2>
                
                {/* Features */}
                <div style={{
                    // display: 'inline-block',
                    marginBottom:'50px',
                    marginTop: '8px',
                    justifyContent: 'center',
                    display: 'block',
                }}>

                    {/* Feature1 */}
                    <div 
                    
                    style={{
                        display: 'inline-block',
                        marginLeft: '2vw',
                        marginRight:'2vw',
                        marginTop: '0px'
                        
                    }}>

                        <h5
                        data-aos="fade-up" data-aos-anchor-placement="center-bottom"
                        style={{
                            fontSize: '22px',
                            lineHeight:'33px',
                            textAlign: 'center',
                            marginBottom: '0px'
                        }}>
                            {name1}
                        </h5>

                        <p
                        data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        style={{
                            width: '290px',
                            lineHeight: '150%',
                            textAlign: 'center',
                            fontSize: '16px'
                        }}
                        >
                            {text1}
                        </p>

                    </div>

                    {/* Feature2 */}
                    <div style={{
                        display: 'inline-block',
                        marginLeft: '2vw',
                        marginRight:'2vw',
                        marginTop: '-16px'
                    }}>

                        <h5
                        data-aos="fade-up" data-aos-anchor-placement="center-bottom"
                        style={{
                            fontSize: '22px',
                            lineHeight:'33px',
                            textAlign: 'center',
                            marginBottom: '0px'
                        }}>
                            {name2}
                        </h5>

                        <p
                        data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        style={{
                            width: '320px',
                            lineHeight: '150%',
                            textAlign: 'center',
                            fontSize: '16px'
                        }}
                        >
                            {text2}
                        </p>

                    </div>

                    {/* Feature3 */}
                    <div style={{
                        display: 'inline-block',
                        marginLeft: '2vw',
                        marginRight:'2vw',
                        marginTop: '-16px'
                    }}>

                        <h5
                        data-aos="fade-up" data-aos-anchor-placement="center-bottom"
                        style={{
                            fontSize: '22px',
                            lineHeight:'33px',
                            textAlign: 'center',
                            marginBottom: '0px'
                        }}>
                            {name3}
                        </h5>

                        <p
                        data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        style={{
                            width: '290px',
                            lineHeight: '150%',
                            textAlign: 'center',
                            fontSize: '16px'
                        }}
                        >
                            {text3}
                        </p>

                    </div>


                </div>

            </div>
        </div>
      );
    }
}
export default CakesDesktop;