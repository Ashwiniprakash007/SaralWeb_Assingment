import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const HourlyTraffic = ({ data }) => {
    const chartData = Object.keys(data).map(hour => ({ hour, count: data[hour] }));

    return (
        <div>
            <h2>Hourly Traffic</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HourlyTraffic;
