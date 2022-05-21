import React from "react";
import './CoinRow.css'

function coinRow({ coin, index }) {
  // console.log(coin, index);
  return (
    <tr key={coin.id}>
      <td>{index}</td>
      <td>
        <img src={coin.image} alt={coin.name} />
        <span>{coin.name}</span>
        <span className="symbol">{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td className={coin.price_change_24h > 0? 'text-success' :'text-danger'} >{coin.price_change_24h}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
}

export default coinRow;
