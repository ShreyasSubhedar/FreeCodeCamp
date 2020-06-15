import React, { useState, useEffect } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
momentDurationFormatSetup(moment)
const TimeLeft = ({breakLength, SessionLength }) => {
    const[currentSessionType,setCurrentSessionType]=useState('Session');
    const[intervalId,setIntervalId]=useState(null);
    const [timeLeft, setTimeLeft] = useState(SessionLength);
    useEffect(() => {
        setTimeLeft(SessionLength);
    }, [SessionLength]);
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss',{trim:false});
const isStarted = intervalId !==null;
    const handleStartStop=()=>{
        if(isStarted){
            clearInterval(intervalId);
            setIntervalId(null);
        }
        else{
   const newIntervalId= setInterval(() => {
        setTimeLeft(prevTimeLeft=>{
            const newTimeLeft = prevTimeLeft-1;
            if(newTimeLeft>=0)
            return prevTimeLeft -1;
            if(currentSessionType==="Session"){
                setCurrentSessionType('Break');
                setTimeLeft(breakLength);
            }
            else if(currentSessionType==="Break"){
                setCurrentSessionType('Session');
                setTimeLeft(SessionLength);
            }
        });
    }, 1000);
 setIntervalId(newIntervalId);
}
};
    return (
        <div className="col-12 text-center">
            <div style={{ border: "4px solid blue", borderRadius: "5%" }}>
                <strong><h3 style={{ fontFamily: "ubuntu", padding: "4px", textAlign: "center" }} id="timer-label">Session</h3></strong>

                <label id="time-left" style={{ height: "130px", width: "130px", paddingTop: "25px", fontSize: "40px", border: "4px solid black", borderRadius: "50%" }}>{formattedTimeLeft}</label>
            </div>
            <br />
            <div className="row">
              <div className="col-6">
                <button className="btn btn-primary fa fa fa-play btn-danger btn-primary  btn-block" onClick={handleStartStop} id="start_stop"></button>
              </div>
              <div className="col-6">
                <button className="btn btn-primary fa fa fa-refresh btn-primary btn-block " id="reset"></button>
              </div>
            </div>
        </div>
    );
}
export default TimeLeft;