import React from 'react';

function MinutesToHours() {

    const [amount, setAmount] = React.useState();
    const [flipped, setFlipped] = React.useState(false);

    const onChange = (event) => {
        if(isNaN(event.target.value)) {
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

    return (
      <div>
          <h1>Minutes To Hours</h1>
          <label htmlFor="minutes">Minutes</label>
          <input id="minutes" type="number" placeholder="Minutes" value={flipped ?  amount : amount * 60} onChange={onChange} disabled={!flipped} />
          &nbsp;&nbsp;&nbsp;
          <label htmlFor="hours">Hours</label>
          <input id="hours" type="number" placeholder="Hours" value={!flipped ? amount : Math.round(amount/60)} onChange={onChange} disabled={flipped} />
          <br/>
          <button onClick={reset}>Reset!!</button>
          <br/>
          <button onClick={flip}>{flipped ? "Invert" : "Turn back"}</button>
      </div>
    );
  }
    
  export default MinutesToHours;