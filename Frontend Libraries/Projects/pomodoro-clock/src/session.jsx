import React from 'react'
const Session=({SessionLengthInMinutes,incrementSessionLengthByOneUnit,decrementSessionLengthByOneUnit})=>{
   
    return (
        <div className="col-6 text-center">
        <label id="session-label">Session Length</label> <br />
        <button className="fa fa-angle-down btn btn-danger" onClick={decrementSessionLengthByOneUnit} id="session-decrement"></button>
    <label id="session-length" style={{ font: "Courier", fontSize: "30px" }}>{SessionLengthInMinutes}</label>
        <button className="fa fa-angle-up align-right btn btn-warning" onClick={incrementSessionLengthByOneUnit} id="session-increment"></button>
      </div>
);
}
export default Session;