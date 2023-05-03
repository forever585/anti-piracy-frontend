import React from 'react';
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import CustomTable from "../../components/CustomTable";
import {mock_data} from "../../data/mock_data";

Chart.register(ArcElement);

export default function Summary(props) {
	const dataFromApi = () => {
        return mock_data.summary
    };   
	
	const [data] = React.useState(dataFromApi());
	const chatdata = {
		datasets: [
			{
				data: [300, 50],
				backgroundColor: ['#ffa201', '#4f4f4f'],
				hoverBackgroundColor: ['#ffa201', '#4f4f4f']
			}
		]
	};

	return (
        <div className="card">
            <div className="row">
                <div className="col-xl-2">
					<div style={{height:"150px", marginLeft:"10%", marginTop:"10%"}}>
						<Doughnut data={chatdata}/>
					</div>
					<br/>
					<div className="text-center">92 reviewed out of 487</div>
				</div>
				<div className="col-xl-6">
					<br/>
					<div className="form-group">
						<h3>Account Summary</h3>
					</div>
					<div>
						<span style={{fontSize:"18px", fontWeight: "bold"}}>92 </span>
						<span> Unique Infringements Identified</span>
					</div>
					<div>
						<span style={{fontSize:"18px", fontWeight: "bold"}}>1,087 </span>
						<span> Links Found</span>
					</div>
					<div>
						<span style={{fontSize:"18px", fontWeight: "bold"}}>395 </span>
						<span> System Deleted Links</span>
					</div>
					<div>
						<span style={{fontSize:"18px", fontWeight: "bold"}}>92 </span>
						<span> Manually Submitted Links</span>
					</div>
					<div>
						<span style={{fontSize:"18px", fontWeight: "bold"}}>1 </span>
						<span> Notices Sent</span>
					</div>
					<div>
						<span style={{fontSize:"18px", fontWeight: "bold"}}>18.9% </span>
						<span> Review Completed</span>
					</div>
				</div>
			</div>
			<div className="container"><br/>
				<CustomTable
					type={{
						"Official Name": 'official_name',                        
						"Reviewed": 'reviewed',
						"Identified Infringements": 'identified_infringements',
					}}
					typeEx={{}}
					style={{}}
					image={[]}
					button={{}}
					buttonEx={{}}
					searchField={true}
					data={data}/>
            </div>
        </div>
	);
}
