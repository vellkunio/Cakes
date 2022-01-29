import React, { Component } from 'react';
import QualityElement from './QualityElement';

class QualitiesMobile extends Component {
    render() {
        let sectionName = 'Свойства'
        let name1 = 'Полезно'
        let name2 = 'Вкусно'
        let name3 = 'Сытно'
        let name4 = 'Многоэтажный'
        let name5 = 'Захватывающе'
        let name6 = 'Необычно'
        let name7 = 'Нежный'
        let text1 = 'Только натуральные продукты'
        let text2 = 'Вкуснее чем еда твоей мамы'
        let text3 = 'Наешься даже кусочком'
        let text4 = 'Хрущев бы удивился'
        let text5 = 'Пусть все завидуют'
        let text6 = 'Такого вы ещё не видели'
        let text7 = 'Нежнее чем Джонсон Бэби'

        if (localStorage.language === 'RU') {
            sectionName = 'Свойства'
            name1 = 'Полезно'
            name2 = 'Вкусно'
            name3 = 'Сытно'
            name4 = 'Многоэтажный'
            name5 = 'Захватывающе'
            name6 = 'Необычно'
            name7 = 'Нежный'
            text1 = 'Только натуральные продукты'
            text2 = 'Вкуснее чем еда твоей мамы'
            text3 = 'Наешься даже кусочком'
            text4 = 'Хрущев бы удивился'
            text5 = 'Пусть все завидуют'
            text6 = 'Такого вы ещё не видели'
            text7 = 'Нежнее чем Джонсон Бэби'
        } else if (localStorage.language === 'UA') {
            sectionName = 'Властивості'
            name1 = 'Корисно'
            name2 = 'Смачно'
            name3 = 'Ситно'
            name4 = 'Багатоповерховий'
            name5 = 'Захоплююче'
            name6 = 'Незвичні'
            name7 = 'Ніжні'
            text1 = 'Тільки натуральні продукти'
            text2 = 'Смачніше ніж їжа твоєї мами'
            text3 = 'Наїсися навіть шматочком'
            text4 = 'Хрущов би здивувався'
            text5 = 'Нехай усі заздрять'
            text6 = 'Такого ви ще не бачили'
            text7 = 'Ніжніше ніж Джонсон Бебі'
        } else if (localStorage.language === 'US') {
            sectionName = 'Qualities'
            name1 = 'Healthy'
            name2 = 'Tasty'
            name3 = 'Full'
            name4 = 'High-rise'
            name5 = 'Exciting'
            name6 = 'Unusual'
            name7 = 'Gentle'
            text1 = 'Only natural products'
            text2 = `Tastier than your mom's food`
            text3 = 'Full after one piece'
            text4 = 'Khrushchev would be surprised'
            text5 = 'Let everyone envy'
            text6 = `You haven't seen it before`
            text7 = 'Gentle like Johnson Baby'
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
                
                {/* Qualities 1st line */}
                <div style={{
                    // display: 'inline-block',
                    // marginBottom:'50px',
                    marginTop: '40px',
                    justifyContent: 'center',
                    display: 'inline-block',
                    // backgroundColor: 'gray'
                }}>

                    {/* Element1 */}
                    <QualityElement name={name1} text={text1} mrgLeft={'0px'} mrgRight={'auto'} mrgBottom={'16px'} mrgTop={'16px'} placement={'fade-right'} position={"top-bottom"}/>

                    {/* Feature2 */}
                    <QualityElement name={name2} text={text2} mrgLeft={'30px'} mrgRight={'auto'} mrgBottom={'16px'} mrgTop={'16px'} placement={'fade-left'} position={"top-bottom"}/>

                    {/* Feature3 */}
                    <QualityElement name={name3} text={text3} mrgLeft={'0px'} mrgRight={'auto'} mrgBottom={'16px'} mrgTop={'16px'} placement={'fade-right'} position={"top-bottom"}/>

                    {/* Element1 */}
                    <QualityElement name={name4} text={text4} mrgLeft={'30px'} mrgRight={'auto'} mrgBottom={'16px'} mrgTop={'16px'} placement={'fade-left'} position={"top-bottom"}/>

                    {/* Feature2 */}
                    <QualityElement name={name5} text={text5} mrgLeft={'0px'} mrgRight={'auto'} mrgBottom={'16px'} mrgTop={'16px'} placement={'fade-right'} position={"top-bottom"}/>

                    {/* Feature3 */}
                    <QualityElement name={name6} text={text6} mrgLeft={'30px'} mrgRight={'auto'} mrgBottom={'16px'} mrgTop={'16px'} placement={'fade-left'} position={"top-bottom"}/>

                    {/* Feature4 */}
                    <QualityElement name={name7} text={text7} mrgLeft={'0px'} mrgRight={'auto'} mrgBottom={'16px'} mrgTop={'16px'} placement={'fade-right'} position={"top-bottom"}/>

                </div>

            </div>
        </div>
      );
    }
}
export default QualitiesMobile;