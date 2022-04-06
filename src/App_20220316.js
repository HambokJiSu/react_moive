import React from 'react';
// import Moive from './Moive';
import MinutesToHours from './MinutesToHours';
import MileToKm from './MileToKm';

function App() {

  let [cnt, setCnt] = React.useState(0);

  let [cvt, setCvt] = React.useState("-1");

  const fn_click = () => {
    //  setCnt(cnt++) 보다 정확한 방법, 다른 곳에서도 state를 변경할 수 있으므로
    setCnt((current) => current +1);
  }

  const onConverterChange = (event) => {
    setCvt(event.target.value);
  }

  return (
    <div className="App">
      <h3 onClick={fn_click}>
        Total click : {cnt}
      </h3>
      {/* <button onClick={() => setCvt((current) => current === "MMTOHH" ? "MITOKM" : "MMTOHH")} >
        Change Converter
      </button>
      {cvt === "MMTOHH" ? <MinutesToHours /> : <MileToKm />} */}
      <select onChange={onConverterChange}>
        <option value="-1">Select Converter</option>
        <option value="0">Minutes To Hours</option>
        <option value="1">Mile To Km/h</option>
      </select>
      <hr />
      {cvt === "-1" ? <h3>Please select</h3> : null}
      {cvt === "0" ? <MinutesToHours /> : null}
      {cvt === "1" ? <MileToKm /> : null}
      {/* <Moive />
      <Moive /> */}
    </div>
  );
}

export default App;