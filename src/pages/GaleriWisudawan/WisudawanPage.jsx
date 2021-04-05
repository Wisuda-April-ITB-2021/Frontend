import React, { useState, useEffect } from "react";
import { Template } from "../Template/Template";
import {
  MessageForm,
  Messages,
} from "../../components/GaleriComponents/Message";
import { List, ListItem } from "../../components/shared/List";
import {useHistory} from "react-router-dom";

import Accordion from "../../components/GaleriComponents/Accordion";
import "./WisudawanPage.scss";

import {
	fetchWisudawan,
	fetchWisudawanContent,
	fetchWisudawanMessage,
	parseImg,
	normalizeResponse,
	postMessage
} from "../Controller";

import {ReactComponent as InstagramIcon} from "../../icons/instagram.svg";
import {ReactComponent as LinkedinIcon} from "../../icons/linkedin.svg";
import {ReactComponent as TwitterIcon} from "../../icons/twitter.svg";
import {ReactComponent as SpotifyIcon} from "../../icons/spotify.svg";
import {ReactComponent as LineIcon} from "../../icons/line.svg";
import {ReactComponent as TiktokIcon} from "../../icons/tiktok.svg";

import {getFunFact, getKontribusi, parseOrgData, parsePrestasiKaryaData} from "../Util";

const generateList = (data) => (
	<List>
		{data.map((row, i) => (
			<ListItem title={row.headings} imageLink={parseImg(row.image) || ""} key={i}>
				{row.details}
			</ListItem>
		))}
	</List>
);

const generateAccordion = (data) => {
  let res = [];

  for(const [key,value] of Object.entries(data)){
    if(value.content.length){
      res.push(
				<Accordion title={key} image={value.isLocal ? value.logo : parseImg(value.logo)} key={key}>
					{generateList(value.content)}
				</Accordion>
			);
    }
    
  }

  return <>{res}</>
};

const generateMediaSocial = (wisudawan) => {
	if (!wisudawan.nama) return <></>;
	let medsos = [
		{
			url: wisudawan.instagram,
			C: <InstagramIcon className='social-media-icon instagram-icon' />,
		},
		{
			url: wisudawan.twitter,
			C: <TwitterIcon className='social-media-icon twitter-icon' />,
		},
		{
			url: wisudawan.linkedin,
			C: <LinkedinIcon className='social-media-icon linkedin-icon' />,
		},
		{
			url: wisudawan.line,
			C: <LineIcon className='social-media-icon line-icon' />,
		},
		{
			url: wisudawan.spotify,
			C: <TiktokIcon className='social-media-icon tiktok-icon' />,
		},
		{
			url: wisudawan.spotify,
			C: <SpotifyIcon className='social-media-icon spotify-icon' />,
		},
	];

	return (
		<div className='media-social'>
			{medsos.map((row, i) =>
				row.url ? (
					<a href={row.url} target='_blank'>
						{row.C}
					</a>
				) : (
					<></>
				)
			)}
		</div>
	);
};

const generateFunFact = (wisudawan) =>{
  let fun_fact = wisudawan.nama ? getFunFact(wisudawan) : [];
  if(!fun_fact.length) return <></>
  return (
		<div className='fun-facts'>
			<h3>Fun Facts</h3>
			{generateList(fun_fact)}
		</div>
	);
}

const generateKontribusi = (wisudawan) => {
	let kontribusi = wisudawan.nama ? getKontribusi(wisudawan.org_data) : [];
	if(!kontribusi.length) return <></>
  return (
		<div className='fun-facts'>
			<h3>Kontribusi</h3>
			{generateList(kontribusi)}
		</div>
		)
}

const generateOrganisasi = (wisudawan) => {
  let org_data = wisudawan.nama ? parseOrgData(wisudawan.org_data) : null;
	if (!org_data) return <></>;
  return (
		<div className='organisasi'>
			<h3>Organisasi</h3>
			{generateAccordion(org_data)}
		</div>
	);
}

const generatePrestasiKarya = (wisudawan) => {
	let prestasiKarya = wisudawan.nama
		? parsePrestasiKaryaData(wisudawan.self_data)
		: null;
	if (!prestasiKarya) return <></>;
	return (
		<div className='prestasi'>
			<h3>Prestasi Dan Karya</h3>
			{generateAccordion(prestasiKarya)}
		</div>
	);
};

export const WisudawanPage = () => {
  const id = "dcf53d9e-05e9-4ea2-9d77-db73855730ce";
	const history = useHistory();

  const [wisudawan, setWisudawan] = useState({});
  const [messages, setMessages] = useState(null);

	const handlePost = async (name, msg) =>{
		if(name=="") name = "Anonymous"
		try{
			await postMessage({
				id_wisudawan: wisudawan.id_wisudawan,
				sender: name,
				message: msg,
			});
			alert("Pesan kamu sudah dikirim!");
			history.push(0);
		}catch(err){
			console.log(JSON.stringify(err));
			alert("Sorry! Something went wrong! Please try again later!");
		}
		
	}

  useEffect(async () => {
    try{
      const bio_wisudawan = normalizeResponse(await fetchWisudawan(id));
			const content_wisudawan = normalizeResponse(await fetchWisudawanContent(bio_wisudawan.nim));
			fetchWisudawanMessage(id).then((res)=>{
				console.log("MASUK SINI BANG");
				setMessages(normalizeResponse(res));
			}).catch((err)=>{
				console.log("GA ADA MESSAGE BANG")
			})
			const data_wisudawan = {...bio_wisudawan, ...content_wisudawan};
			setWisudawan(data_wisudawan);
    }catch(err){
      console.log(err);
    }
	}, []);

  return (
		<Template isLong>
			<div className='wisudawan-page-specific'>
				<div className='bio'>
					<div className='name'>
						<h2>{wisudawan.nama || ""}</h2>
						<h3>{`${wisudawan.nim}/${wisudawan.jurusan_short}`}</h3>
					</div>
					<img src={parseImg(wisudawan.photo)} />
					<h5 className='desc'>{wisudawan.judul_ta}</h5>
					{generateMediaSocial(wisudawan)}
				</div>

				{generateFunFact(wisudawan)}

				{generateKontribusi(wisudawan)}

				{generateOrganisasi(wisudawan)}

				{generatePrestasiKarya(wisudawan)}

				<h3>Pojok Surat Cinta</h3>
				<MessageForm onPost={handlePost} />
				<h4>Messages ({(messages && messages.length) || 0})</h4>
				<Messages data={messages} nama={wisudawan.nama} />
			</div>
		</Template>
	);
};
