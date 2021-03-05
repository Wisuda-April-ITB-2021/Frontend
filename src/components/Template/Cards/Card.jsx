import React from 'react'
import './Card.scss'
import ornamentCard from './img/ornamen-kartu-1.png'




const Card = ({primary, secondary, image, ornament}) => {

    return (
        <div className='cardItemContainer' >
            <img src={image} alt="" className='mainImage'/>
            <h4>{primary}</h4>
            <h4>{secondary}</h4>
            <h4>ITB</h4>
            
            {(ornament ? 
                (<img src={ornamentCard} alt="" className='ornamentCard'/>):
                '')

            }
        </div>
    )
}

export default Card
