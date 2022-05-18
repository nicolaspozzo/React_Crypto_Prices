import React from 'react'
import './TableCoins.css'

const TableCoins = ({coins}) => {
    console.log(coins)
    // console.log(coins[0].name)
  return ( 
    <table className='table table-dark mt-4 table-hover'>
        <thead>
            <tr>
                <td>Img</td>
                <td>Name</td>
            </tr>
        </thead>
        <tbody>
           {coins.map(coin => (
               <tr key={coin.id}>
                   <td><img src={coin.image}></img></td>
                   <td>{coin.name}</td>
                </tr>
           ))}
        </tbody>
    </table>
  )
}

export default TableCoins
