import React from 'react'
import './Home.css'
import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "../TableCoins/TableCoins";
import CoinChart from "../CoinChart/CoinChart";

const Home = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");


  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();    
  }, []);


    
  return (
      <div className='container'>
          <div className="row m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h1>Coin Market</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search a coin"
              className=" form-control bg-dark text-light border-0 mt-2 text-center"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  )
}

export default Home