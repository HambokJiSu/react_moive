import React from 'react';

function MileToKm() {

    const [amount, setAmount] = React.useState();
    const [flipped, setFlipped] = React.useState(false);

    const onChange = (event) => {
        if(!event.target.value) {
            return;
        }
        console.log('i am in!!');
        setAmount(event.target.value);
    }

    const reset = () => setAmount(0);

    const flip = () => {
        reset();
        setFlipped((current) => !current);
    }

    function roundToParam(num, digit) {
        return +(Math.round(num + "e+" + digit)  + "e-" + digit);
    }

    return (
      <div>
          <h1>Mile To Km</h1>
          <label htmlFor="mile">Mile</label>
          <input id="mile" type="number" placeholder="Mile" value={flipped ?  amount : roundToParam(amount/1.60934, 2)} onChange={onChange} disabled={!flipped} />
          &nbsp;&nbsp;&nbsp;
          <label htmlFor="km">Km/h</label>
          <input id="km" type="number" placeholder="Km/h" value={!flipped ? amount : roundToParam(amount * 1.60934, 1)} onChange={onChange} disabled={flipped} />
          <br/>
          <button onClick={reset}>Reset!!</button>
          <br/>
          <button onClick={flip}>{flipped ? "Invert" : "Turn back"}</button>
      </div>
    );
  }
    
  export default MileToKm;