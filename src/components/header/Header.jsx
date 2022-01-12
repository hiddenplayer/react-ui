import React from 'react'

import avatar from '../../assets/piano.png'
import './Header.css'

export const Header = () => {
    const title = "Let's Build Somthing amingzing with GPT-3 OpenAI"
    const feature = 'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.'
    return (
        <div className='header'>
            <div className='header-container'>
                <h1 className='gradient-txt'>{title}</h1>
                <p>{feature}</p>
                <div className='header-form'>
                    <form>
                        <input type='email' placeholder='Your Email Address'></input>
                        <button type='button'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='header-avatar'>
                <img src={avatar} alt='avatar'></img>
            </div>
        </div>
    )
}
