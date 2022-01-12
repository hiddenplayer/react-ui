import React from 'react'
import { Article } from './article/Article'

import './Blog.css'
import yena from '../../assets/yena.jpg'
import sinestrea from '../../assets/sinestrea.jpg'
import liliana from '../../assets/liliana.jpg'
import veres from '../../assets/veres.jpg'
import arum from '../../assets/arum.jpg'

export const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='gradient-txt'>A lot is happening, <br/> We are blogging about it</h1>
            <div className='blog_container'>
                <div className='blog_container_a'>
                    <Article time='Jan 20, 2022' tit='How to become top one champ Yena' im={yena}/>
                </div>
                <div className='blog_container_b'>
                    <Article time='Jan 20, 2022' tit='How to become top one champ Veres' im={veres}/>
                    <Article time='Jan 20, 2022' tit='How to become top one champ Liliana' im={liliana}/>
                    <Article time='Jan 20, 2022' tit='How to become top one champ Sinestrea' im={sinestrea}/>
                    <Article time='Jan 20, 2022' tit='How to become top one champ Arum' im={arum}/>
                </div>
            </div>
        </div>
    )
}
