import React from 'react'
import Card from './Card'
import './CardContainer.scss'
import mainImage from '../Cards/img/image-1.png'
import mainImage2 from '../Cards/img/image-2.png'
import mainImage3 from '../Cards/img/image-3.png'
import mainImage4 from '../Cards/img/image-4.png'


const CardContainer = () => {
    return (
        <div className='CardContainer'>

            <Card primary='HMMME' secondary='"ATMOSPHAIRA"' image={mainImage} ornament={true} />
            <Card primary='HMO' secondary='"TRITON"' image={mainImage2} ornament={true} />
            <Card primary='HMTG' secondary='"GEA"' image={mainImage3} ornament={true} />
            <Card primary='IMG' secondary='' image={mainImage4} ornament={true} />

        </div>
    )
}

export default CardContainer
