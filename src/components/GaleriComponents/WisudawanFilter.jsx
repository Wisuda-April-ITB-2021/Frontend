import React,{useEffect,useState} from 'react'
import {ReactComponent as SearchIcon} from '../../icons/search-icon.svg'
import "./WisudawanFilter.scss"
 
const listOfGrads= [
    {nama:"abcdefg",nim:"123455"},
    {nama:"deba",nim:"234235"},
    {nama:"abcd",nim:"345243"},
    {nama:"mazaya sulthan",nim:"1543534"},
    {nama:"Anonim",nim:"143535"},
    {nama:"afdfg",nim:"14353463"},
  ]

export const WisudawanFilter = () => {
    const [wisudawan, setWisudawan] = useState([])
    const [text, setText] = useState('')
    useEffect(() => {
        setWisudawan(listOfGrads
            .filter(x=>x.nama.toLowerCase().includes(text) || x.nim.includes(text)))
    }, [text])
    return (
        <div className="WisudawanFilter">
            <form>
                <h3>Daftar Wisudawan</h3>
                <input onChange={e=>setText(e.target.value)} type="text" placeholder="Cari Nama atau NIM wisudawan"/>
                <SearchIcon className="search-icon"/>
            </form>
            {wisudawan.map(x=>{
                // buat mapping component kalau perlu
                // return <p>{x.nama} , {x.nim}</p>
            })}
        </div>
    )
}

export default WisudawanFilter
