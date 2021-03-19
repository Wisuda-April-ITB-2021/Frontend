import React from 'react'
import WisudawanCard from './WisudawanCard'
import './WisudawanCardContainer.scss'
import mainImage  from './img/wisudawan1.png'
import mainImage2 from './img/wisudawan2.png'
import mainImage3 from './img/wisudawan3.png'
import mainImage4 from './img/wisudawan4.png'
import mainImage5 from './img/wisudawan5.png'
import mainImage6 from './img/wisudawan6.png'


const WisudawanCardContainer = () => {
    return (
        <div className='wisudawanCardContainer'>
            <WisudawanCard nama='ARNETTHA SEPTINEZ' nim={16720327} image={mainImage} quotes='Kiat Sukses beternak lele supaya dapat cuan dikala pandemi'/>
            <WisudawanCard nama='ARNETTHA SEPTINEZ' nim={16720327} image={mainImage3} quotes='Kiat Sukses beternak lele supaya dapat cuan dikala pandemi'/>
            <WisudawanCard nama='ARNETTHA SEPTINEZ' nim={16720327} image={mainImage2} quotes='Kiat Sukses beternak lele supaya dapat cuan dikala pandemi'/>
            <WisudawanCard nama='ARNETTHA SEPTINEZ' nim={16720327} image={mainImage4} quotes='Kiat Sukses beternak lele supaya dapat cuan dikala pandemi'/>
            <WisudawanCard nama='ARNETTHA SEPTINEZ' nim={16720327} image={mainImage5} quotes='Kiat Sukses beternak lele supaya dapat cuan dikala pandemi'/>
            <WisudawanCard nama='ARNETTHA SEPTINEZ' nim={16720327} image={mainImage6} quotes='Kiat Sukses beternak lele supaya dapat cuan dikala pandemi'/>
            <WisudawanCard nama='ARNETTHA SEPTINEZ' nim={16720327} image={mainImage6} quotes='Kiat Sukses beternak lele supaya dapat cuan dikala pandemi'/>
        </div>
    )
}

export default WisudawanCardContainer
