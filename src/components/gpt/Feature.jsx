import React from 'react'
import './GPT.css'

export const Feature = ({ item, text }) => {
    return (
        <div className='feature'>
            <div className='feature-title'>
                <div className='dash'></div>
                <h3>{item}</h3>
            </div>
            <div className='feature-txt'>
                <p>{text}</p>
            </div>
        </div>
    )
}
