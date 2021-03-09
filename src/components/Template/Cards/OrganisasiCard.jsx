import React from 'react'
import './OrganisasiCard.scss'
import ornamentCard from './img/ornamen-kartu-1.png'




const OrganisasiCard = ({primary, secondary, tertiary, image }) => {

    return (

        <div className='organisasiCard'>
            <img src={image} alt="" className={'mainImage'}/>
            <h4>{primary}</h4>
            <h4>{secondary}</h4>
            <h4>{tertiary}</h4>
            <img src={ornamentCard} alt="" className='ornamentCard'/>

        </div>

    )
}

export default OrganisasiCard
