import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins/TableCoins";
import CoinChart from './components/CoinChart/CoinChart'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [historicData, setHistoricData] = useState([]);



  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    );
    setCoins(res.data);
  };

  // const getHistoricChart = async (id = 'bitcoin', days = 365, currency = 'bitcoin') => {  
  const getHistoricChart = async () => {

    // const res = await axios.get(
    //   `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
    // );
    
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=btc&days=365`
    );

    setHistoricData(res.data.prices)
    console.log('prices', res.data.prices);
  };

    useEffect(() => {
      getHistoricChart();
    }, []);


  useEffect(() => {
    getData();
    // const interval = setInterval(() => {
    //   getData();
    // }, 1000);
    // return () => clearInterval(interval);
    
  }, []);


     

  return (
    <div className="container">
      <CoinChart historicData={historicData}/>
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
  );
}

export default App;
