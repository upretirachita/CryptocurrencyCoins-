import React from 'react';

const Coins = props => {
    if (props.filteredCoins){
        const newFilteredCoins = props.filteredCoins.map(coin=>{
            return(
                <div>
                <span>{coin.name}</span>
                <span>{coin.rank}</span>
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


class ExtractingData extends React.Component {
  state = {
    coins: null,
    inputUser:'',
    filteredCoins:null
  };

  componentDidMount () {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';
    fetch (url).then (response => response.json ()).then (coins => {
      this.setState ({
        coins: coins,
      });
    });
    console.log ('Component did mount log');
  }

getCoinName = () =>{
    let y = this.state.coins.filter(coin => {
    return coin.name.includes(this.state.inputUser)
 }) 
    this.setState({filteredCoins:y})
    console.log(this.state.filteredCoins)
}

  userInput = (e)=>{
    this.setState({inputUser:e.target.value})
    }
  render () {
    const coins = this.state.coins;
    const filteredCoins = this.state.filteredCoins;
    console.log (coins);
    // console.log (coins.length);
    console.log ('Loging from render method');
    return (
      <div className="Main">
        <input type="text"  placeholder="Search Countries" onChange={this.userInput}/>
        <button onClick={this.getCoinName}>Search By Letter</button>
        <div className="coins">
          <Coins coins={coins} 
                filteredCoins ={filteredCoins} />
        </div>
      </div>
    );
  }
}

export default ExtractingData;
