
import React from 'react';

const Coins = props => {
    if (props.filteredCoins){
        const newFilteredCoins = props.filteredCoins.map(coin=>{
            return(
                <div key={coin.id}>
                    <span>{coin.name}</span>
                    <span>{coin.price_usd}</span>
                    <span>{coin.percent_change_24h}</span>
                    <span>{coin.rank}</span>
                    <span>{coin.symbol}</span>
                </div>
            );
        })
        return newFilteredCoins;
    }
     else if(props.coins ) {
       const coinsElements = props.coins.map (coin => {
            return (
                <div key={coin.id} >
                    <span>{coin.name}</span>
                    <span>{coin.price_usd}</span>
                    <span>{coin.percent_change_24h}</span>
                    <span>{coin.rank}</span>
                    <span>{coin.symbol}</span>
                </div>
            );
          })
        return coinsElements;
    }
     else{
        return <div> <h1>Loading.....</h1></div>;
        }  
    
  };

  export default Coins