import React from "react";
import { LineChart, XAxis, CartesianGrid, Line, YAxis } from 'recharts';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CoinChart = ({ coin }) => {
    let { coinName } = useParams();

    // const [historicData, setHistoricData] = useState([]);

    // const getHistoricChart = async () => {
    //   const res = await axios.get(
    //     `https://api.coingecko.com/api/v3/coins/${coin.name.toLowerCase()}/market_chart?vs_currency=${coin.name.toLowerCase()}&days=${365}`
    //   );

    //   // const res = await axios.get(
    //   //   `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=btc&days=365`
    //   // );

    //   setHistoricData(res.data.prices);
    // };

    // useEffect(() => {
    //   getHistoricChart();
    // }, []);
  
  
  // console.log('hd', historicData)

    const data = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];


  return (
 
    <div className="d-flex justify-content-around">
      info
      <h1>{coinName}</h1>
      <LineChart
        width={900}
        height={500}
        data={data}
        // data={historicData.map((hd, index) => hd[index])}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis dataKey="" />
        {/* <XAxis dataKey={historicData[0]} />
        <YAxis dataKey="" /> */}
        <Line
          type="monotone"
          dataKey="pv"
          // dataKey={historicData[1]}
          stroke="#8884d8"
          //   activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </div>
  );
};

export default CoinChart;
