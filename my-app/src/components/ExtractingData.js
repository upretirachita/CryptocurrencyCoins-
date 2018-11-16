import React from 'react';

const Coins = props => {
    if (props.filteredCoins){
        const newFilteredCoins = props.filteredCoins.map(coin=>{
            return(
                <div key={coin.id}>
                    <span>{coin.name}</span>
                    <span>{coin.price_usd}</span>
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
    filteredCoins:null,
    sortedCoins:null,
    flag:true,
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
    let filteredCoins = this.state.coins.filter(coin => {
    return coin.name.includes(this.state.inputUser)
 }) 
    this.setState({
      filteredCoins:filteredCoins,
      flag:true
    })
    console.log(this.state.filteredCoins)
}
sortedByAtoZ = (type) =>{
    console.log("test",this.state.coins)
    //let coinNameArr= this.state.coins.map(coin => {return (coin.name)});
    
    let sortedResult = this.state.coins.sort(function(a, b) {
        var nameA = a[type].toUpperCase(); // ignore upper and lowercase
        var nameB = b[type].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });  
    console.log("name",sortedResult)
    this.setState({
      sortedCoins:sortedResult,
      flag:false
    })
    console.log("sorted",this.state.sortedCoins);
}



userInput = (e)=>{
    this.setState({inputUser:e.target.value})
}

render () {
    const coins = this.state.coins;
    const filteredCoins = this.state.filteredCoins;
    const sortedCoins = this.state.sortedCoins;
    //console.log("filteredSOrt",this.state.sortedCoins)
    console.log (coins);
    // console.log (coins.length);

    console.log ('Loging from render method');
    return (
      <div className="Main">
        <button onClick = {()=>this.sortedByAtoZ("price_usd")}>Sort By Price </button>
        <button onClick = {()=>this.sortedByAtoZ("rank")}>Sort By Rank </button>
        <input type="text"  placeholder="Search Countries" onChange={this.userInput}/>
        <button onClick={this.getCoinName}>Search By Letter</button>
        <button onClick = {()=>this.sortedByAtoZ("name")}>Sort By Name </button>
        
        <div className="coins">
            <Coins  coins={coins} 
                    filteredCoins ={filteredCoins} 
                    sortedCoins = {sortedCoins}/>
           
        </div>
      </div>
    );
  }
}

export default ExtractingData;
