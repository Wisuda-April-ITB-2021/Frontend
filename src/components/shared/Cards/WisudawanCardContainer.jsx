import React from 'react'
import WisudawanCard from './WisudawanCard'
import './WisudawanCardContainer.scss'
import {dummyWisudawan} from "../../../pages/Util";


const WisudawanCardContainer = () => {
    return (
			<div className='wisudawanCardContainer'>
				{dummyWisudawan.map((row, i) => (
					<WisudawanCard
						nama={row.name}
						nim={row.nim}
						image={row.image}
						quotes={row.quote}
						key={i}
					/>
				))}
			</div>
		);
}

export default WisudawanCardContainer
