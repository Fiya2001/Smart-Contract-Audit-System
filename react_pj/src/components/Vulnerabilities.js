import React, { useEffect, useState } from "react";
import axios from "axios";

const ReportVulnerabilitiesTable = ({ reportId }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make a request to the backend to fetch data based on reportId
        axios.get(`http://localhost:8080/vulnerabilities/${reportId}/`).then((response) => {
            console.log(response)
            setData(response.data);
        });
    }, [reportId]);

    return (
        <div className="container mt-4">
            <h1> <a href="/"> Vulnerabilities</a> </h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th> ID</th>
                        <th>Vulnerability Name</th>
                        <th>Impact</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, ind) => (
                        <tr >
                            <td>{ind + 1}</td>
                            <td>{row.name}</td>
                            <td>{row.impact}</td>
                            <td>{row.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportVulnerabilitiesTable;
