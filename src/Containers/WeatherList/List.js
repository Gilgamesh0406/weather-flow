import React, { useContext, useState } from "react";
import {Table } from "antd";
import { WeatherInformation } from "../../Contexts/WeatherInformation";
const columns = [
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Temperature",
    dataIndex: "temperature",
    key: "temperature",
  },
  {
    title: "Humidity",
    dataIndex: "humidity",
    key: "humidity",
  },
  {
    title: "Condition",
    key: "condition",
    dataIndex: "condition",
  },
];
export default function List() {

  const { data } = useContext(WeatherInformation);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  let secondPassed = 0;
  const start = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    setInterval(() => {
      setNow(Date.now());
    }, 10);
    if(now != null && startTime != null) {
        secondPassed = (now - startTime) / 10;
    }
  }
  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <h1>Time passed:  {secondPassed.toFixed(3)}</h1>
      <button onClick={start}>start</button>
    </div>
  );
}
