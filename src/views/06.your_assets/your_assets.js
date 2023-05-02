import React from "react";
import CustomTable from "../../components/CustomTable";
import {mock_data} from "../../data/mock_data";

export default function YourAssets(props) {
    const dataFromApi = () => {
        return mock_data.assets2
    };

    const [data] = React.useState(dataFromApi());

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title text-center">Your Assets</h4>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "IMAGE": 'image',
                        "Description": 'description',                        
                        "Price": 'price',
                        "Date and Time": 'date',
                    }}
                    typeEx={{}}
                    style={{}}
                    image={["image"]}
                    button={{}}
                    buttonEx={{}}
                    searchField={true}
                    data={data}/>
            </div>
        </div>
    )
}