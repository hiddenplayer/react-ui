import React from 'react'

import avatar from '../../assets/piano.png'
import './Header.css'

export const Header = () => {
    const title = "Let's Build Somthing amazing with React"
    const feature = 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.'
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
