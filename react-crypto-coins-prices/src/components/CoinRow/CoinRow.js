import React from "react";
import "./CoinRow.css";
import { useNavigate } from "react-router-dom";

const CoinRow = ({ coin, index }) => {

  let navigate = useNavigate();
  
  return (
    <tr key={coin.id}>
      <td>{index}</td>
      <td>
        <img src={coin.image} alt={coin.name} />
        <span>{coin.name}</span>
        <span className="symbol">{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td
        className={coin.price_change_24h > 0 ? "text-success" : "text-danger"}
      >
        {coin.price_change_24h}
      </td>
      <td>{coin.total_volume}</td>
      <td>
        {/* <button onClick={() => { navigate(`/coin-chart/${coin.name}`) }}>
          Button
        </button> */}
          <i class="bi bi-graph-up" onClick={() => {navigate(`/coin-chart/${coin.name}`)}}></i>
      </td>
    </tr>
  );
};
export default CoinRow;
