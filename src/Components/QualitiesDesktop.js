import React, { Component } from 'react';
import QualityElement from './QualityElement';

class QualitiesDesktop extends Component {
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
                Свойства
                </h2>
                
                {/* Qualities 1st line */}
                <div style={{
                    // display: 'inline-block',
                    marginBottom:'50px',
                    marginTop: '40px',
                    justifyContent: 'center',
                    display: 'flex',
                    // backgroundColor: 'gray'
                }}>

                    {/* Element1 */}
                    <QualityElement name={'Полезно'} text={'Только натуральные продукты'}/>

                    {/* Feature2 */}
                    <QualityElement name={'Вкусно'} text={'Вкуснее чем еда твоей мамы'}/>

                    {/* Feature3 */}
                    <QualityElement name={'Сытно'} text={'Наешься даже кусочком'}/>


                </div>

                {/* Qualities 2st line */}
                <div style={{
                    // display: 'inline-block',
                    marginBottom:'50px',
                    marginTop: '24px',
                    justifyContent: 'center',
                    display: 'flex',
                    // backgroundColor: 'gray'
                }}>

                    {/* Element1 */}
                    <QualityElement name={'Многоэтажный'} text={'Хрущев бы удивился'}/>

                    {/* Feature2 */}
                    <QualityElement name={'Захватывающе'} text={'Пусть все завидуют'}/>

                    {/* Feature3 */}
                    <QualityElement name={'Необычно'} text={'Такого вы ещё не видели'}/>

                    {/* Feature4 */}
                    <QualityElement name={'Нежный'} text={'Нежнее чем Джонсон Бэби'}/>


                </div>

            </div>
        </div>
      );
    }
}
export default QualitiesDesktop;