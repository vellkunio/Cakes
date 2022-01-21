import React, { Component } from 'react'
import ChartElement from './ChartElement'

export default class ForWhoDesktop extends Component {
    render() {
        const lineColor = 'rgba(247, 207, 186, 0.75)';
        // const green= 'rgba(133, 159, 148, 0.5)';
        const green= 'rgba(229, 253, 232, 0.5)';
        const pink= 'rgba(211, 146, 126, 0.5)';
        const blue= 'rgba(103, 104, 171, 0.25)';
        return (
            <div style={{marginBottom: '500px'}}>
                <h2 className='oswald'
                    style={{
                        letterSpacing: '0.15em',
                        fontSize: '48px',
                        marginBottom: '0px',
                        marginTop: '-50px',
                        marginBottom: '50px'
                    }}
                >
                Для кого?
                </h2>

                <div>
                    <ChartElement 
                    name={"Мужу"}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'-40px'}
                    marginBottom={''}
                    marginLeft={'500px'}
                    marginRight={''}
                    transform={'-8'}
                    />

                    <ChartElement 
                    name={"Жене"}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'120px'}
                    marginBottom={''}
                    marginLeft={'350px'}
                    marginRight={''}
                    transform={'-10'}
                    />

                    <ChartElement 
                    name={"Родителям"}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'-40px'}
                    marginBottom={''}
                    marginLeft={'200px'}
                    marginRight={''}
                    transform={'8'}
                    />
                    <ChartElement 
                    name={"Детям"}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'20px'}
                    marginBottom={''}
                    marginLeft={'80px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={"Родственникам"}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'190px'}
                    marginBottom={''}
                    marginLeft={'80px'}
                    marginRight={''}
                    transform={'10'}
                    />

                    <ChartElement 
                    name={"Другу"}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'0px'}
                    marginBottom={''}
                    marginLeft={'-100px'}
                    marginRight={''}
                    transform={'4'}
                    />
                    
                    <ChartElement 
                    name={"Знакомому"}
                    BGcolor={blue}
                    color={'black'}
                    marginTop={'0px'}
                    marginBottom={''}
                    marginLeft={'-300px'}
                    marginRight={''}
                    transform={'-12'}
                    />
                    <ChartElement 
                    name={"Учителю"}
                    BGcolor={blue}
                    color={'grey'}
                    marginTop={'40px'}
                    marginBottom={''}
                    marginLeft={'-600px'}
                    marginRight={''}
                    transform={'4'}
                    />
                    <ChartElement 
                    name={"Особый повод"}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'250px'}
                    marginBottom={''}
                    marginLeft={'-350px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={"Подруге"}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'120px'}
                    marginBottom={''}
                    marginLeft={'-300px'}
                    marginRight={''}
                    transform={'2'}
                    />
                    <ChartElement 
                    name={"Коллеге"}
                    BGcolor={blue}
                    color={'grey'}
                    marginTop={'250px'}
                    marginBottom={''}
                    marginLeft={'-550px'}
                    marginRight={''}
                    transform={'4'}
                    />
                    <ChartElement 
                    name={"Знакомой"}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'140px'}
                    marginBottom={''}
                    marginLeft={'-480px'}
                    marginRight={''}
                    transform={'0'}
                    />
                    <ChartElement 
                    name={"Корпоратив"}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'150px'}
                    marginBottom={''}
                    marginLeft={'-120px'}
                    marginRight={''}
                    transform={'-8'}
                    />
                    <ChartElement 
                    name={"Юбилея"}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'200px'}
                    marginBottom={''}
                    marginLeft={'520px'}
                    marginRight={''}
                    transform={'0'}
                    />
                    <ChartElement 
                    name={"Определения пола ребенка"}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'280px'}
                    marginBottom={''}
                    marginLeft={'100px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={"Мальчика"}
                    BGcolor={pink}
                    color={'black'}
                    marginTop={'280px'}
                    marginBottom={''}
                    marginLeft={'-100px'}
                    marginRight={''}
                    transform={'-4'}
                    />
                    <ChartElement 
                    name={"Девочки"}
                    BGcolor={green}
                    color={'black'}
                    marginTop={'100px'}
                    marginBottom={''}
                    marginLeft={'100px'}
                    marginRight={''}
                    transform={'-4'}
                    />



                </div>


            </div>
        )
    }
}

                    {/* <div style={{
                        height: '1px', width: '1500px',
                        position: 'absolute', backgroundColor: 'black', 
                        marginLeft: '0px', marginTop: '20px', marginRight: 'auto',
                        // transform: 'rotate(30deg)',
                    }}></div> */}

                    {/* <div style={{
                        height: '100px', width: '1px',
                        position: 'absolute', backgroundColor: lineColor, 
                        left: '1050px', marginTop: '20px',
                        transform: 'rotate(30deg)',
                    }}></div>
                    <div style={{
                        height: '100px', width: '1px',
                        position: 'absolute', backgroundColor: lineColor, 
                        left: '1350px', marginTop: '20px',
                        transform: 'rotate(30deg)',
                    }}></div>
                    <div style={{
                        height: '200px', width: '1px',
                        position: 'absolute', backgroundColor: lineColor, 
                        left: '1068px', marginTop: '89px',
                        transform: 'rotate(120deg)',
                    }}></div> */}