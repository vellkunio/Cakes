import React, { Component } from 'react';
import AOS from 'aos';

class AboutUsDesktop extends Component {
    render() {
        let name = 'О нас'
        let text = `Наша уникальная особенность в том, что для нас не существует 
        невозможного. Любой, даже самый сложный и завораживающий торт 
        будет сделан нашими профессионалами`

        if (localStorage.language === 'RU') {
            name = 'О нас'
            text = `Наша уникальная особенность в том, что для нас не существует 
            невозможного. Любой, даже самый сложный и завораживающий торт 
            будет сделан нашими профессионалами`
        } else if (localStorage.language === 'UA') {
            name = 'Про нас'
            text = `Наша унікальна особливість у тому, що для нас немає неможливого. 
            Будь-який, навіть найскладніший і торт буде зроблено нашими професіоналами`
        } else if (localStorage.language === 'US') {
            name = 'About us'
            text = `Our unique feature is that nothing is impossible for us. 
            Any, even the most complex cake will be made by our professionals`
        }

        let fontSize = '120px'
        let mrgTop = '100vh'
        // let fontSize = '120px'

        if(localStorage.screenSize > 1200){
        fontSize = '120px'
        mrgTop = '100vh'
        } else if(localStorage.screenSize <= 1200 && localStorage.screenSize > 600){
        fontSize = '80px'
        mrgTop = '100vh'
        } else {
        fontSize = '64px'
        mrgTop = '78vh'
        }

      return (
        <div>
            <div style={{marginTop: mrgTop}} >
                <h2 className='oswald'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    style={{
                        letterSpacing: '0.15em',
                        fontSize: '48px',
                        marginBottom: '0px'
                    }}
                >
                {name}
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    style={{
                        fontSize:'18px',
                        lineHeight: '30px',
                        letterSpacing: '0.15em',
                        width:'min(850px, 80%)',
                        // width:'850px',
                        // width:'80%',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    {text}
                </p>

            </div>
        </div>
      );
    }
}
export default AboutUsDesktop;