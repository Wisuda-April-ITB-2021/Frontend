import React, {useState, useEffect} from "react";
import {Template} from "../Template/Template";
import "./ApresiasiPage.scss";

import {Youtube} from "../../components/LandingComponents/Youtube";
import {Spotify} from "../../components/LandingComponents/Spotify";

import {fetchApresiasi, normalizeResponse} from "../Controller";

const generateYoutube = (data) =>{
  if (!data.apresiasi_video) return (<></>)
  return(
    <>
			<h5 className='Tulisan'>- Video -</h5>
			<div className='Youtube'>
				<Youtube link={data.apresiasi_video} />
			</div>
		</>)
}

const generateSpotify = (data) =>{
  if (!data.apresiasi_spotify) return (<></>);
	return (
		<>
			<h5 className='Tulisan'>- Spotify -</h5>
			<div className='Spotify'>
				<Spotify link={data.apresiasi_spotify}/>
			</div>
		</>
	);
}

const generatePoster = (data) =>{
  if (!data.apresiasi_poster) return (<></>);
	return (
		<>
			<h5 className='Tulisan'>- Poster -</h5>
			<div className='Poster'><img src={data.apresiasi_poster}/></div>
		</>
	);
}

const generateCerita = (data) =>{
  if (!data.apresiasi_cerita) return (<></>);
	return (
		<>
			<h5 className='Tulisan'>- Cerita -</h5>
			<div className='Cerita'>{data.apresiasi_cerita}</div>
		</>
	);
}

export const ApresiasiPage = () => {
  const slug = "ISO_ITB";

	const [data, setData] = useState({});

  useEffect(async ()=>{
    try{
      const res = normalizeResponse(await fetchApresiasi(slug));
			setData(res);
    }catch(err){
      setData({});
    }
  },[])

	return (
		<Template className='container'>
			<div className='Tulisanatas'>
				<h3>Apresiasi Wisudawan</h3>
				<h2>{data && data.name}</h2>
			</div>

			{generateYoutube(data)}
			{generateSpotify(data)}
      {generatePoster(data)}
			{generateCerita(data)}
			
		</Template>
	);
};
