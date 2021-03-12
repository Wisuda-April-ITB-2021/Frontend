import React from 'react'
import OrganisasiCard from './OrganisasiCard'
import './OrganisasiCardContainer.scss'
import mainImage from '../Cards/img/image-1.png'
import mainImage2 from '../Cards/img/image-2.png'
import mainImage3 from '../Cards/img/image-3.png'
import mainImage4 from '../Cards/img/image-4.png'


const OrganisasiCardContainer = () => {
    return (
        <div className='organisasiCardContainer'>

            <OrganisasiCard primary='HMMME' secondary='"ATMOSPHAIRA"' tertiary='ITB' image={mainImage} />
            <OrganisasiCard primary='HMO' secondary='"TRITON"' tertiary='ITB' image={mainImage2} />
            <OrganisasiCard primary='HMTG' secondary='"GEA"' tertiary='ITB' image={mainImage3} />
            <OrganisasiCard primary='IMG' secondary='' tertiary='ITB' image={mainImage4} />
            <OrganisasiCard primary='HMTG' secondary='"GEA"' tertiary='ITB' image={mainImage3} />
            <OrganisasiCard primary='IMG' secondary='' tertiary='ITB' image={mainImage4} />
            <OrganisasiCard primary='IMG' secondary='' tertiary='ITB' image={mainImage4} />
            

        </div>
    )
}

export default OrganisasiCardContainer
