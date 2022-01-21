import React, { Component } from 'react'

export default class ChartElement extends Component {
    render() {
        const {
            name, BGcolor, marginTop, marginBottom, marginLeft, marginRight, color, transform
        } = this.props
        return (
            <div>
                
                <div
                    style={{
                        position: 'absolute',
                        alignItems: 'center',
                        borderRadius: '25px',
                        backgroundColor: BGcolor,
                        color: color,
                        display: 'inline-block',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        paddingTop: '15px',
                        paddingBottom: '15px',
                        marginTop,
                        marginBottom,
                        marginLeft,
                        marginRight,
                        transform: `rotate(${transform}deg)`,
                        fontSize: '18px',
                        WebkitBackdropFilter: 'blur(5px)',
                        // backdropFilter: 'blur(1px)',
                        
                    }}
                >
                    {name}
                </div>

            </div>
        )
    }
}
