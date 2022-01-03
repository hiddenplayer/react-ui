import React from 'react'
import { Feature } from './Feature'
import './GPT.css'

export const GPT = () => {
    const title = 'The possibilities are beyond your imagination'
    const sub = 'Explore The Library'

    const a1 = "What is GPT-3"
    const a1_txt = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
    const a2 = "Chatbots"
    const a2_txt = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
    const a3 = "Knowledgebase"
    const a3_txt = "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    const a4 = "Education"
    const a4_txt = "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    return (
        <div className='gpt'>
            <div className='gpt-top'>
                <Feature item={a1} text={a1_txt} />
            </div>
            <div className='gpt-title'>
                <h2 className='gradient-txt'>{title}</h2>
                <p>{sub}</p>
            </div>
            <div className='gpt-bot'>
                <Feature item={a2} text={a2_txt} />
                <Feature item={a3} text={a3_txt} />
                <Feature item={a4} text={a4_txt} />
            </div>
        </div>
    )
}
