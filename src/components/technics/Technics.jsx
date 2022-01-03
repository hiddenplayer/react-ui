import React from 'react'
import './Technics.css'

import spring from '../../assets/spring.png'
import react from '../../assets/react.png'
import angular from '../../assets/angular.png'
import android from '../../assets/android.png'
import opencv from '../../assets/opencv.png'
import keras from '../../assets/keras.png'

export const Technics = () => {
    return (
        <div className='technics'>
            <img src={spring} alt='spring'></img>
            <img src={react} alt='react'></img>
            <img src={angular} alt='angular'></img>
            <img src={android} alt='android'></img>
            <img src={opencv} alt='opencv'></img>
            <img src={keras} alt='keras'></img>
        </div>
    )
}
