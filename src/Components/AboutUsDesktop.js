import React, { Component } from 'react';

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
      return (
        <div>
            <div style={{marginTop: '100vh'}}>
                <h2 className='oswald'
                    style={{
                        letterSpacing: '0.15em',
                        fontSize: '48px',
                        marginBottom: '0px'
                    }}
                >
                {name}
                </h2>

                <p
                    style={{
                        fontSize:'18px',
                        lineHeight: '30px',
                        letterSpacing: '0.15em',
                        width:'850px',
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