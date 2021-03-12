import React from 'react'
import './WisudawanCard.scss'
import cardBG from './img/card-background.png'




const WisudawanCard = ({nama, nim, quotes, image}) => {
    return (
        <div className='wisudawanCard'>
            <img src={cardBG} alt="" className={'cardBackground'}/>
            <h4>{nama}</h4>
            <h4>{nim}</h4>
            <img src={image} alt="" className={'mainImage'}/>
            <p>{quotes}</p>
        </div>

    )
}

export default WisudawanCard
