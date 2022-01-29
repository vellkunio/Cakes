import React, { Component } from 'react'
import ChartElement from './ChartElement'

export default class ForWhoDesktop extends Component {
    render() {
        let sectionName = 'Для кого?'
        let name1 = 'Мужу'
        let name2 = 'Жене'
        let name3 = 'Родителям'
        let name4 = 'Детям'
        let name5 = 'Родственникам'
        let name6 = 'Другу'
        let name7 = 'Знакомому'
        let name8 = 'Учителю'
        let name9 = 'Особый повод'
        let name10 = 'Подруге'
        let name11 = 'Коллеге'
        let name12 = 'Знакомой'
        let name13 = 'Корпоратив'
        let name14 = 'Юбилея'
        let name15 = 'Определения пола ребенка'
        let name16 = 'Мальчика'
        let name17 = 'Девочки'

        if (localStorage.language === 'RU') {
            sectionName = 'Для кого?'
            name1 = 'Мужу'
            name2 = 'Жене'
            name3 = 'Родителям'
            name4 = 'Детям'
            name5 = 'Родственникам'
            name6 = 'Другу'
            name7 = 'Знакомому'
            name8 = 'Учителю'
            name9 = 'Особый повод'
            name10 = 'Подруге'
            name11 = 'Коллеге'
            name12 = 'Знакомой'
            name13 = 'Корпоратив'
            name14 = 'Юбилея'
            name15 = 'Определения пола ребенка'
            name16 = 'Мальчика'
            name17 = 'Девочки'
        } else if (localStorage.language === 'UA') {
            sectionName = 'Для кого?'
            name1 = 'Чоловіку'
            name2 = 'Дружині'
            name3 = 'Батькам'
            name4 = 'Дітям'
            name5 = 'Родичам'
            name6 = 'Другу'
            name7 = 'Знайомому'
            name8 = 'Вчителю'
            name9 = 'Особливий привід'
            name10 = 'Подрузі'
            name11 = 'Колезі'
            name12 = 'Знайомий'
            name13 = 'Корпоратив'
            name14 = 'Ювілею'
            name15 = 'Визначення статі дитини'
            name16 = 'Хлопчику'
            name17 = 'Дівчині'
        } else if (localStorage.language === 'US') {
            sectionName = 'For who?'
            name1 = 'Husband'
            name2 = 'Wife'
            name3 = 'Parents'
            name4 = 'Kid'
            name5 = 'Relatives'
            name6 = 'Friend'
            name7 = 'Familiar'
            name8 = 'Boyfriend'
            name9 = 'Special occasion'
            name10 = 'Girlfriend'
            name11 = 'Colleague'
            name12 = 'Familiar'
            name13 = 'Corporate'
            name14 = 'Anniversary'
            name15 = 'Gender reveal'
            name16 = 'Boy'
            name17 = 'Girl'
        }

        const lineColor = 'rgba(247, 207, 186, 0.75)';
        // const green= 'rgba(133, 159, 148, 0.5)';
        const green= 'rgba(229, 253, 232, 0.5)';
        const pink= 'rgba(211, 146, 126, 0.5)';
        const blue= 'rgba(103, 104, 171, 0.25)';
        return (
            <div>
                <h2 className='oswald'
                    style={{
                        letterSpacing: '0.15em',
                        fontSize: '48px',
                        marginBottom: '0px',
                        marginTop: '-50px',
                        marginBottom: '50px'
                    }}
                >
                {sectionName}
                </h2>
                {localStorage.screenSize > 600 ? (
                <div className='DESKTOP'>
                    <ChartElement 
                    name={name1}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'-40px'}
                    marginBottom={''}
                    marginLeft={'500px'}
                    marginRight={''}
                    transform={'-8'}
                    />

                    <ChartElement 
                    name={name2}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'120px'}
                    marginBottom={''}
                    marginLeft={'350px'}
                    marginRight={''}
                    transform={'-10'}
                    />

                    <ChartElement 
                    name={name3}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'-40px'}
                    marginBottom={''}
                    marginLeft={'200px'}
                    marginRight={''}
                    transform={'8'}
                    />
                    <ChartElement 
                    name={name4}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'20px'}
                    marginBottom={''}
                    marginLeft={'80px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={name5}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'190px'}
                    marginBottom={''}
                    marginLeft={'80px'}
                    marginRight={''}
                    transform={'10'}
                    />

                    <ChartElement 
                    name={name6}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'0px'}
                    marginBottom={''}
                    marginLeft={'-100px'}
                    marginRight={''}
                    transform={'4'}
                    />
                    
                    <ChartElement 
                    name={name7}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'0px'}
                    marginBottom={''}
                    marginLeft={'-300px'}
                    marginRight={''}
                    transform={'-12'}
                    />
                    <ChartElement 
                    name={name8}
                    BGcolor={blue}
                    color={'grey'}
                    marginTop={'40px'}
                    marginBottom={''}
                    marginLeft={'-600px'}
                    marginRight={''}
                    transform={'4'}
                    />
                    <ChartElement 
                    name={name9}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'250px'}
                    marginBottom={''}
                    marginLeft={'-350px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={name10}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'120px'}
                    marginBottom={''}
                    marginLeft={'-300px'}
                    marginRight={''}
                    transform={'2'}
                    />
                    <ChartElement 
                    name={name11}
                    BGcolor={blue}
                    color={'grey'}
                    marginTop={'250px'}
                    marginBottom={''}
                    marginLeft={'-550px'}
                    marginRight={''}
                    transform={'4'}
                    />
                    <ChartElement 
                    name={name12}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'140px'}
                    marginBottom={''}
                    marginLeft={'-480px'}
                    marginRight={''}
                    transform={'0'}
                    />
                    <ChartElement 
                    name={name13}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'150px'}
                    marginBottom={''}
                    marginLeft={'-120px'}
                    marginRight={''}
                    transform={'-8'}
                    />
                    <ChartElement 
                    name={name14}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'200px'}
                    marginBottom={''}
                    marginLeft={'520px'}
                    marginRight={''}
                    transform={'0'}
                    />
                    <ChartElement 
                    name={name15}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'280px'}
                    marginBottom={''}
                    marginLeft={'100px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={name16}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'280px'}
                    marginBottom={''}
                    marginLeft={'-100px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={name17}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'100px'}
                    marginBottom={''}
                    marginLeft={'100px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                </div>
                ) : (
                <div className='MOBILE' style={{marginTop: '150px'}}>
                    <ChartElement 
                    name={name1}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'240px'}
                    marginBottom={''}
                    marginLeft={'70px'}
                    marginRight={''}
                    transform={'-8'}
                    />

                    <ChartElement 
                    name={name2}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'-30px'}
                    marginBottom={''}
                    marginLeft={'-155px'}
                    marginRight={''}
                    transform={'-10'}
                    />

                    <ChartElement 
                    name={name3}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'40px'}
                    marginBottom={''}
                    marginLeft={'-200px'}
                    marginRight={''}
                    transform={'8'}
                    />
                    <ChartElement 
                    name={name4}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'-10px'}
                    marginBottom={''}
                    marginLeft={'-50px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={name5}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'100px'}
                    marginBottom={''}
                    marginLeft={'-150px'}
                    marginRight={''}
                    transform={'0'}
                    />

                    <ChartElement 
                    name={name6}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'170px'}
                    marginBottom={''}
                    marginLeft={'-170px'}
                    marginRight={''}
                    transform={'-8'}
                    />
                    
                    <ChartElement 
                    name={name7}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'220px'}
                    marginBottom={''}
                    marginLeft={'-100px'}
                    marginRight={''}
                    transform={'4'}
                    />
                    <ChartElement 
                    name={name8}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'-60px'}
                    marginBottom={''}
                    marginLeft={'20px'}
                    marginRight={''}
                    transform={'8'}
                    />
                    <ChartElement 
                    name={name9}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'280px'}
                    marginBottom={''}
                    marginLeft={'-180px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={name10}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'480px'}
                    marginBottom={''}
                    marginLeft={'-180px'}
                    marginRight={''}
                    transform={'2'}
                    />
                    <ChartElement 
                    name={name11}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'370px'}
                    marginBottom={''}
                    marginLeft={'-135px'}
                    marginRight={''}
                    transform={'4'}
                    />
                    <ChartElement 
                    name={name12}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'470px'}
                    marginBottom={''}
                    marginLeft={'0px'}
                    marginRight={'30px'}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={name13}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'60px'}
                    marginBottom={''}
                    marginLeft={'0px'}
                    marginRight={''}
                    transform={'-8'}
                    />
                    <ChartElement 
                    name={name14}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'400px'}
                    marginBottom={''}
                    marginLeft={'0px'}
                    marginRight={''}
                    transform={'0'}
                    />
                    <ChartElement 
                    name={name15}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'-130px'}
                    marginBottom={''}
                    marginLeft={'-200px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={name16}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'320px'}
                    marginBottom={''}
                    marginLeft={'30px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={name17}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'160px'}
                    marginBottom={''}
                    marginLeft={'20px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                </div>
                )}













                


            </div>
        )
    }
}
