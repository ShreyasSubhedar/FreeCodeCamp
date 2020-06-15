import React from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
momentDurationFormatSetup(moment)
const TimeLeft =({handleResetButtonClick, handleStartStopClick, startStopButtonLabel, timeLeft, timerLabel })=>{
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });

    return (
        <div className="col-12 text-center">
            <div style={{ border: "4px solid blue", borderRadius: "5%" }}>
                <strong><h3 style={{ fontFamily: "ubuntu", padding: "4px", textAlign: "center" }} id="timer-label">{timerLabel}</h3></strong>

                <label id="time-left" style={{ height: "130px", width: "130px", paddingTop: "25px", fontSize: "40px", border: "4px solid black", borderRadius: "50%" }}>{formattedTimeLeft}</label>
            </div>
            <br />
            <div className="row">
              <div className="col-6">
    <button className="btn btn-primary fa fa fa-play btn-danger btn-primary  btn-block" onClick={handleStartStopClick} id="start_stop">{startStopButtonLabel}</button>
              </div>
              <div className="col-6">
                <button className="btn btn-primary fa fa fa-refresh btn-primary btn-block " onClick={handleResetButtonClick}id="reset"></button>
              </div>
            </div>
        </div>
    );
}
export default TimeLeft;