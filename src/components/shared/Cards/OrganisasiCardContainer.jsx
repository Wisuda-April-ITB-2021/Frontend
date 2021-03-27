import React from 'react'
import OrganisasiCard from './OrganisasiCard'
import './OrganisasiCardContainer.scss'


const OrganisasiCardContainer = ({data}) => {
    return (
			<div className='organisasiCardContainer'>
        {data.map((row,i)=><OrganisasiCard text={row.text} key={i} image={row.img} url={row.url}/>)}
			</div>
		);
}

export default OrganisasiCardContainer
