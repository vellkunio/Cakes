import React, { Component } from 'react';
import CakeTypeElement from './CakeTypeElement';
// import Example1 from '../images/Example1.png'
import Example1 from '../images/girlCake.png'
import Example2 from '../images/gruzin.png'
import Example3 from '../images/heart1.png'
import Example4 from '../images/cube.png'



export default class TypesDesktop extends Component {
    render() {
        let sectionName = 'Виды'
        let sectionUndername = 'Самые популярные начинки'
        let name1 = 'Взрослый торт'
        let name2 = 'Официант Гоги'
        let name3 = 'Парящее сердце'
        let name4 = 'Левитирующий куб'
        let filling1 = 'Бельгийский шоколад'
        let filling2 = 'Шоколадный мусс'
        let filling3 = 'Карамельная девочка'
        let filling4 = 'Мусс на белом шоколаде'
        let feature1 = 'Девушка'
        let feature2 = '8 киллограмм'
        let feature3 = 'Левитирующий'
        let feature4 = 'Светится изнутри'
        let extra1 = 'Трюфеля'
        let extra2 = 'Коктейль'
        let extra3 = 'Двухэтажный'
        let extra4 = 'Стоит на углу'

        if (localStorage.language === 'RU') {
            sectionName = 'Виды'
            sectionUndername = 'Самые популярные начинки'
            name1 = 'Взрослый торт'
            name2 = 'Официант Гоги'
            name3 = 'Парящее сердце'
            name4 = 'Левитирующий куб'
            filling1 = 'Бельгийский шоколад'
            filling2 = 'Шоколадный мусс'
            filling3 = 'Карамельная девочка'
            filling4 = 'Мусс на белом шоколаде'
            feature1 = 'Девушка'
            feature2 = '8 киллограмм'
            feature3 = 'Левитирующий'
            feature4 = 'Светится изнутри'
            extra1 = 'Трюфеля'
            extra2 = 'Коктейль'
            extra3 = 'Двухэтажный'
            extra4 = 'Стоит на углу'
        } else if (localStorage.language === 'UA') {
            sectionName = 'Види'
            sectionUndername = 'Найпопулярніші начинки'
            name1 = 'Дорослий торт'
            name2 = 'Офіціант Гогі'
            name3 = 'Паряче серце'
            name4 = 'Левітуючий куб'
            filling1 = 'Бельгійський шоколад'
            filling2 = 'Шоколадний мус'
            filling3 = 'Карамельна дівчинка'
            filling4 = 'Мус на білому шоколаді'
            feature1 = 'Дівчина'
            feature2 = '8 кілограм'
            feature3 = 'Левітуючий'
            feature4 = 'Світиться зсередини'
            extra1 = 'Трюфеля'
            extra2 = 'Коктейль'
            extra3 = 'Двоповерховий'
            extra4 = 'Стоїть на куті'
        } else if (localStorage.language === 'US') {
            sectionName = 'Kinds'
            sectionUndername = 'Most popular toppings'
            name1 = 'Adult cake'
            name2 = 'Waiter Gogi'
            name3 = 'Floating heart'
            name4 = 'Levitating Cube'
            filling1 = 'Belgian chocolate'
            filling2 = 'Chocolate mousse'
            filling3 = 'Caramel girl'
            filling4 = 'White chocolate mousse'
            feature1 = 'Woman'
            feature2 = '8 kilograms'
            feature3 = 'Livitating'
            feature4 = 'Glows from inside'
            extra1 = 'Truffles'
            extra2 = 'Cocktail'
            extra3 = 'Double decker'
            extra4 = 'Stands on corner'
        }
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
                    {sectionName}
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
                        {sectionUndername}
                    </p>

                    <div style={{
                        justifyContent: 'center',
                        display: 'flex',
                    }}>

                        <CakeTypeElement 
                        name={name1}
                        inside={filling1}
                        feature={feature1}
                        extra={extra1}
                        price={'399'}
                        image={Example1}
                        place={'left'}
                        count={'1'}
                        />

                        <CakeTypeElement 
                        name={name2}
                        inside={filling2}
                        feature={feature2}
                        extra={extra2}
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
                        name={name3}
                        inside={filling3}
                        feature={feature3}
                        extra={extra3}
                        price={'599'}
                        image={Example3}
                        place={'left'}
                        count={'2'}
                        />

                        <CakeTypeElement 
                        name={name4}
                        inside={filling4}
                        feature={feature4}
                        extra={extra4}
                        price={'449'}
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
