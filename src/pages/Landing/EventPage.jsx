import React, {useState, useEffect} from "react";
import { Template } from "../Template/Template";
import axios from "axios";
import Event from "../../components/LandingComponents/EventTable.js";
import "../../components/LandingComponents/EventTable.scss"
import "./EventPage.scss";

export const EventPage = () => {

  const [event, setEvent] = useState([]);
  const toggleComplete = (id) =>{
		let target = event;
		target = target.map((row)=> row.id==id? {...row, completed : !row.completed} : row);
		setEvent(target);
  }

  useEffect(()=>{
		axios.get("https://jsonplaceholder.typicode.com/users")
			.then((res)=>{
				setEvent(res.data.slice(0, 7));
			})
			.catch((err)=>{console.log(err)});
	},[])

  return (
    <Template>
		<div>
			<h2 className="title">Rundown Event</h2>
        	<table className="ukurantabel">
         	 {event &&
					event.map((row) => (
					<Event data={row} toggleComplete={toggleComplete} key={row.id} />
					))}
        	</table>
		</div>
    </Template>
  );
};