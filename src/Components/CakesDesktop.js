import React, { Component } from 'react';
import hearts from '../images/hearts.png'
import ghost from '../images/ghost.png'
import girl from '../images/girl.png'
import boy from '../images/boy.png'
import CardCakeDesktop from './CardCakeDesktop';


class CakesDesktop extends Component {
    render() {
        let nameSection = 'Торты';
        let name1 = 'Свадебный';
        let name2 = 'Детский';
        let name3 = 'Женский';
        let name4 = 'Мужской';
        let text1 = 'Идеальный торт для самого важного события в жизни двух сердец';
        let text2 = 'Что может быть лучше чем счастливая улыбка ребенка?';
        let text3 = 'Любая девушка будет в восторге от подарка сделанного специально для неё';
        let text4 = 'По-настоящему солидный и роскошый торт для мужчин';

        if (localStorage.language === 'RU') {
            nameSection = 'Торты';
            name1 = 'Свадебный';
            name2 = 'Детский';
            name3 = 'Женский';
            name4 = 'Мужской';
            text1 = 'Идеальный торт для самого важного события в жизни двух сердец';
            text2 = 'Что может быть лучше чем счастливая улыбка ребенка?';
            text3 = 'Любая девушка будет в восторге от подарка сделанного специально для неё';
            text4 = 'По-настоящему солидный и роскошый торт для мужчин';
        } else if (localStorage.language === 'UA') {
            nameSection = 'Торти';
            name1 = 'Весільний';
            name2 = 'Дитячий';
            name3 = 'Жіночий';
            name4 = 'Чоловічий';
            text1 = 'Ідеальний торт для найважливішої події у житті двох сердець';
            text2 = 'Що може бути краще, ніж щаслива посмішка улюбленної дитини?';
            text3 = 'Будь-яка дівчина буде в захваті від подарунка спеціально для неї';
            text4 = 'По-справжньому солідний та розкішний торт для чоловіків';
        } else if (localStorage.language === 'US') {
            nameSection = 'Cakes';
            name1 = 'Wedding';
            name2 = 'Kids';
            name3 = 'female';
            name4 = 'Male';
            text1 = 'The perfect cake for the most important event in the lives of two hearts';
            text2 = `What could be better than seeing a happy smile of your lovely child? `;
            text3 = 'Any girl will be delighted with a gift made especially for her';
            text4 = 'Truly serious and luxurious cake for real man in unique design';
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
                {nameSection}
                </h2>
                
                {/* Cakes */}
                <div style={{
                    display: 'inline-block',
                    // marginBottom:'50px',
                    marginTop: '40px'
                }}>

                    <CardCakeDesktop name={name1} image={hearts} text={text1}/>

                    <CardCakeDesktop name={name2} image={ghost} text={text2}/>

                    <CardCakeDesktop name={name3} image={girl} text={text3}/>

                    <CardCakeDesktop name={name4} image={boy} text={text4}/>


                </div>

            </div>
        </div>
      );
    }
}
export default CakesDesktop;


















// import React, { Component } from 'react';
// import hearts from '../images/hearts.png'
// import ghost from '../images/ghost.png'
// import girl from '../images/girl.png'
// import boy from '../images/boy.png'


// class CakesDesktop extends Component {
//     render() {
//       return (
//         <div>
//             <div style={{marginTop: '40px'}}>
                
//             <h2 className='oswald'
//                     style={{
//                         letterSpacing: '0.15em',
//                         fontSize: '48px',
//                         marginBottom: '0px'
//                     }}
//                 >
//                 Торты
//                 </h2>
                
//                 {/* Cakes */}
//                 <div style={{
//                     display: 'inline-block',
//                     // marginBottom:'50px',
//                     marginTop: '24px'
//                 }}>

//                     {/* Cake1 */}
//                     <div style={{
//                         display: 'inline-block',
//                         height: '255px',
//                         width: '200px',
//                         background: 'rgba(255, 255, 255, 0.5)',
//                         border: '1px solid rgba(255, 255, 255, 0.5)',
//                         boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
//                         borderRadius: '15px',
//                         WebkitBackdropFilter: 'blur(10px)',
//                         backdropFilter:'blur(10px)',
//                         marginRight: '2vw',
//                         marginLeft: '2vw',
//                     }}>

//                         <h3
//                         style={{
//                             margin: '0px',
//                             marginTop: '24px',
//                             fontSize: '16px',
//                             fontWeight: 'bold'
//                         }}>Свадебный</h3>

//                         <img
//                         src={hearts} alt="Hearts"
//                             style={{
//                                 // width: '50px',
//                                 height: '75px',
//                                 marginTop: '16px'
//                             }}
//                         />

//                         <p
//                         style={{
//                             fontSize: '12px',
//                             lineHeight: '19px',
//                             textAlign: 'center',
//                             width: '170px',
//                             marginLeft:'auto',
//                             marginRight: 'auto',
//                         }}>
//                             Идеальный торт для 
//                             самого важного 
//                             события в жизни 
//                             двух сердец
//                         </p>
//                     </div>


//                     {/* Cake2 */}
//                     <div style={{
//                         display: 'inline-block',
//                         height: '255px',
//                         width: '200px',
//                         background: 'rgba(255, 255, 255, 0.5)',
//                         border: '1px solid rgba(255, 255, 255, 0.5)',
//                         boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
//                         borderRadius: '15px',
//                         WebkitBackdropFilter: 'blur(10px)',
//                         backdropFilter:'blur(10px)',
//                         marginRight: '2vw',
//                         marginLeft: '2vw',
//                     }}>

//                         <h3
//                         style={{
//                             margin: '0px',
//                             marginTop: '24px',
//                             fontSize: '16px',
//                             fontWeight: 'bold'
//                         }}>Детский</h3>

//                         <img
//                         src={ghost} alt="Ghost"
//                             style={{
//                                 height: '75px',
//                                 marginTop: '16px'
//                             }}
//                         />

//                         <p
//                         style={{
//                             fontSize: '12px',
//                             lineHeight: '19px',
//                             textAlign: 'center',
//                             width: '170px',
//                             marginLeft:'auto',
//                             marginRight: 'auto',
//                         }}>
//                             Что может быть 
//                             лучше чем 
//                             счастливая улыбка 
//                             ребенка?
//                         </p>
//                     </div>


//                     {/* Cake3 */}
//                     <div style={{
//                         display: 'inline-block',
//                         height: '255px',
//                         width: '200px',
//                         background: 'rgba(255, 255, 255, 0.5)',
//                         border: '1px solid rgba(255, 255, 255, 0.5)',
//                         boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
//                         borderRadius: '15px',
//                         WebkitBackdropFilter: 'blur(10px)',
//                         backdropFilter:'blur(10px)',
//                         marginRight: '2vw',
//                         marginLeft: '2vw',
//                     }}>

//                         <h3
//                         style={{
//                             margin: '0px',
//                             marginTop: '24px',
//                             fontSize: '16px',
//                             fontWeight: 'bold'
//                         }}>Женский</h3>

//                         <img
//                         src={girl} alt="Girl"
//                             style={{
//                                 height: '75px',
//                                 marginTop: '16px',
//                                 marginLeft: '15px'
//                             }}
//                         />

//                         <p
//                         style={{
//                             fontSize: '12px',
//                             lineHeight: '19px',
//                             textAlign: 'center',
//                             width: '170px',
//                             marginLeft:'auto',
//                             marginRight: 'auto',
//                         }}>
//                             Любая девушка 
//                             будет в восторге от 
//                             подарка сделанного 
//                             специально для неё
//                         </p>
//                     </div>


//                     {/* Cake4 */}
//                     <div style={{
//                         display: 'inline-block',
//                         height: '255px',
//                         width: '200px',
//                         background: 'rgba(255, 255, 255, 0.5)',
//                         border: '1px solid rgba(255, 255, 255, 0.5)',
//                         boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.25)',
//                         borderRadius: '15px',
//                         WebkitBackdropFilter: 'blur(10px)',
//                         backdropFilter:'blur(10px)',
//                         marginRight: '2vw',
//                         marginLeft: '2vw',
//                     }}>

//                         <h3
//                         style={{
//                             margin: '0px',
//                             marginTop: '24px',
//                             fontSize: '16px',
//                             fontWeight: 'bold'
//                         }}>Мужской</h3>

//                         <img
//                         src={boy} alt="Boy"
//                             style={{
//                                 height: '75px',
//                                 marginTop: '16px',
//                                 marginLeft: '15px'
//                             }}
//                         />

//                         <p
//                         style={{
//                             fontSize: '12px',
//                             lineHeight: '19px',
//                             textAlign: 'center',
//                             width: '170px',
//                             marginLeft:'auto',
//                             marginRight: 'auto',
//                         }}>
//                             По-настоящему 
//                             солидный и 
//                             раскошый торт для 
//                             мужчин
//                         </p>
//                     </div>

//                 </div>

//             </div>
//         </div>
//       );
//     }
// }
// export default CakesDesktop;