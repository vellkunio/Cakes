import React, { Component } from 'react';

class AboutUsDesktop extends Component {
    render() {
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
                О нас
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
                    Наша уникальная особенность в том, что для нас не существует 
                    невозможного. Любой, даже самый сложный и завораживающий торт 
                    будет сделан нашими профессионалами
                </p>

            </div>
        </div>
      );
    }
}
export default AboutUsDesktop;