import React from 'react'
const Break=({breakLengthInMinutes,incrementBreakLengthByOneUnit,decrementBreakLengthByOneUnit})=>{
    
    return (
    <div className="col-6 test-center">
    <label id="break-label">Break Length</label> <br />
    <button className="fa fa-angle-down btn btn-danger" onClick={decrementBreakLengthByOneUnit} id="break-decrement"></button>
    <label id="break-length" style={{ font: "Courier", fontSize: "30px" }}>{breakLengthInMinutes}</label> &nbsp;
    <button className="fa fa-angle-up align-right btn btn-warning" onClick={incrementBreakLengthByOneUnit}id="break-increment"></button>
  </div>
);
}
export default Break;