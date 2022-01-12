import React from 'react'
import './Article.css'

export const Article = ({ im, time, tit }) => {
    return (
        <div className='article'>
            <div className='article-img'>
                <img src={im}></img>
            </div>
            <div className='article-content'>
                <div>
                    <p>{time}</p>
                    <h3>{tit}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}
