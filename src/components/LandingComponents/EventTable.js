import React from "react";
import "./EventTable.scss";

const Event = ({data, toggleComplete}) => {
	return (
			<tr className="rundown">
				<td className="jam">
					<div className="jamtext">
						09.00 - 11.11
					</div>
				</td>
				<td className="line">
				</td>
				<td className="keterangan">
					<div className="keterangantext">
						kata sambutan oleh rektor
					</div>
				</td>
			</tr>
	);
};

export default Event;