import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import phones from '../images/phones.png'

class ExamplesDesktop extends Component {
    render() {
        let name = 'Примеры'
        let text = 'Смотри что уже получили сотни людей в нашем инстаграм по клику на телефоны слева'

        if (localStorage.language === 'RU') {
            name = 'Примеры'
            text = 'Смотри что уже получили сотни людей в нашем инстаграм по клику на телефоны слева'
        } else if (localStorage.language === 'UA') {
            name = 'Приклади'
            text = 'Дивись, що вже отримали сотні людей у нашому інстаграмі на кліку на телефони зліва'
        } else if (localStorage.language === 'US') {
            name = 'Examples'
            text = 'See what hundreds of people have already received on our Instagram by clicking on the phones on the left'
        }
      return (
        <div style={{marginTop: '40px'}}>

            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <a href="https://www.instagram.com/oksanavilkun/" target="_blank">
                    <img
                    src={phones} alt="inst"
                        style={{
                            // width: '50px',
                            height: '450px',
                            marginTop: '16px',
                            marginLeft: '200px'
                        }}
                    />
                    </a>
                </Grid>


                <Grid item xs={6} md={6}>
                    <div style={{marginTop: '120px', marginRight: '200px'}}>
                        <h2 className='oswald'
                            style={{
                                letterSpacing: '0.15em',
                                fontSize: '48px',
                                marginBottom: '0px'
                            }}
                        >{name}</h2>

                        <p
                            style={{
                                fontSize:'18px',
                                lineHeight: '30px',
                                letterSpacing: '0.15em',
                                width:'400px',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}
                        >
                            {text}
                        </p>
                    </div>
                </Grid>

            </Grid>


            

            
        </div>
      );
    }
}
export default ExamplesDesktop;