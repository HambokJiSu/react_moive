import React, {useState, useEffect} from 'react';

function App() {
  const apiUrl = "https://api.coinpaprika.com/v1/tickers?limit=500";
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []
  );

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.symbol}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
          </li>
          )
        )
        }
      </ul>
    </div>
  );
}

export default App;