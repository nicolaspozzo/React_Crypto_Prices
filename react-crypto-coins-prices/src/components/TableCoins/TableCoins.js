import React from "react";
import "./TableCoins.css";
import CoinRow from "../CoinRow/CoinRow";


const titles = ["#", "Coin", "Price", "Price Change", "24 Volume", "Chart"];


const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow
            coin={coin}
            index={index + 1}
            key={index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
