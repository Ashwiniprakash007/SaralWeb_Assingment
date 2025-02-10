import React, { useEffect, useState } from "react";
import axios from "axios";
import IpHistogram from "./components/IpHistogram";
import HourlyTraffic from "./components/HourlyTraffic";
import RequestMethods from "./components/RequestMethods";

function App() {
    const [logData, setLogData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/logs")
            .then(response => setLogData(response.data))
            .catch(error => console.error("Error fetching logs:", error));
    }, []);

    if (!logData) return <h2>Loading...</h2>;

    return (
      <>
      <h1>Server Log Dashboard</h1>
        <div style={{textAlign: "center",
          fontFamily: "Arial",
          width: "100%",
          // display: "grid",
          // gridTemplateColumns: "repeat(2, 1fr)",
          // gap:"100px",
          // margin:"auto"
          }}>
           
            <IpHistogram data={logData.ipCount} />
            <HourlyTraffic data={logData.hourlyTraffic} />
            <RequestMethods data={logData.requestMethods} />
        </div>
        </>
    );
}

export default App;
