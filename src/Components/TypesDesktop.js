import React, { Component } from 'react';
import CakeTypeElement from './CakeTypeElement';
// import Example1 from '../images/Example1.png'
import Example1 from '../images/girlCake.png'
import Example2 from '../images/gruzin.png'
import Example3 from '../images/heart1.png'
import Example4 from '../images/cube.png'

export default class TypesDesktop extends Component {
    render() {
        return (
            <div>
                <div style={{marginTop: '40px'}}>
                    <h2 className='oswald'
                        style={{
                            letterSpacing: '0.15em',
                            fontSize: '48px',
                            marginBottom: '0px'
                        }}
                    >
                    Виды
                    </h2>

                    <p style={{
                        width: '250px',
                        fontSize: '12px',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: '19px',
                        color: 'rgba(0, 0, 0, 0.5)',
                    }}>
                        Самые популярные начинки
                    </p>

                    <div style={{
                        justifyContent: 'center',
                        display: 'flex',
                    }}>

                        <CakeTypeElement 
                        name={'Бомба'}
                        inside={'3 шоколада'}
                        feature={'Ломается молотком'}
                        extra={'Внутри подарок'}
                        price={'500'}
                        image={Example1}
                        place={'left'}
                        count={'1'}
                        />

                        <CakeTypeElement 
                        name={'Сердце'}
                        inside={'Клубничный джем'}
                        feature={'2 этажа, 4 секции'}
                        extra={'Покрыт розами'}
                        price={'499'}
                        image={Example2}
                        place={'right'}
                        count={'3'}
                        />
                    </div>

                    <div style={{
                        justifyContent: 'center',
                        display: 'flex',
                        marginTop: '-50px'
                    }}>

                        <CakeTypeElement 
                        name={'Девушка'}
                        inside={'Заварной'}
                        feature={'18+'}
                        extra={'С девушкой'}
                        price={'499'}
                        image={Example3}
                        place={'left'}
                        count={'2'}
                        />

                        <CakeTypeElement 
                        name={'Грузин'}
                        inside={'Карамельный'}
                        feature={'100см в высоту'}
                        extra={'Коктейль в руке'}
                        price={'599'}
                        image={Example4}
                        place={'right'}
                        count={'4'}
                        />
                    </div>

                </div>
            </div>
        )
    }
}
