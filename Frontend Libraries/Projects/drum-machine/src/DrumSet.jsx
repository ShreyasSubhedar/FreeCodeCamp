import React, { useRef, useState } from 'react'

const DrumSet=()=>{
    const[instrumentName,setInstrumentName]=useState(null);
    const audioElementQ = useRef(null);
    const handleQPressed= ()=>{document.getElementById('Q').play(); setInstrumentName('base');};
    const audioElementW = useRef(null);
    const handleWPressed= ()=>{document.getElementById('W').play(); setInstrumentName('crash');
};
    const audioElementE = useRef(null);
    const handleEPressed= ()=>{document.getElementById('E').play(); setInstrumentName('hiHat');
};
    const audioElementA = useRef(null);
    const handleAPressed= ()=>{document.getElementById('A').play(); setInstrumentName('tom1');
};
    const audioElementS = useRef(null);
    const handleSPressed= ()=>{document.getElementById('S').play(); setInstrumentName('tom2');
};
    const audioElementD = useRef(null);
    const handleDPressed= ()=>{document.getElementById('D').play(); setInstrumentName('tom3');
};
    const audioElementZ = useRef(null);
    const handleZPressed= ()=>{document.getElementById('Z').play(); setInstrumentName('bass');
};
    const audioElementX = useRef(null);
    const handleXPressed= ()=>{document.getElementById('X').play(); setInstrumentName('cool');
};
    const audioElementC = useRef(null);
    const handleCPressed= ()=>{document.getElementById('C').play(); setInstrumentName('awesome');
};
    return(
        <div className="col-sm-6 mt-5 border rounded" id="drum-machine">
        <div className="row" style={{padding:"5px 5px 5px 5px"}} >
            <div className="col-4">
            <button className="btn btn-primary btn-block drum-pad" name="Q" id="QSound" onKeyDown={handleQPressed} onClick={handleQPressed}>Q<audio data-key="74" id="Q" className="clip"  ref={audioElementQ}  src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav"></audio>
</button>
            </div>
            <div className="col-4">
            <button className="btn btn-primary btn-block drum-pad" name="W" id="WSound" onKeyDown={handleWPressed} onClick={handleWPressed}>W<audio data-key="66" id="W" className="clip"  ref={audioElementW} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav"></audio>
</button>
            </div>
            <div className="col-4">
            <button className="btn btn-primary btn-block drum-pad" name="E" id="ESound" onKeyDown={handleEPressed} onClick={handleEPressed}>E<audio data-key="86" id="E" className="clip"  ref={audioElementE}  src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav"></audio>
</button>
            </div>
        </div>
        <div className="row" style={{padding:"5px 5px 5px 5px"}}>
        <div className="col-4">
        <button className="btn btn-primary btn-block drum-pad" name="A"  id="ASound" onKeyDown={handleAPressed} onClick={handleAPressed}>A<audio data-key="72" id="A" className="clip"  ref={audioElementA} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav"></audio>
</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary btn-block drum-pad" name="S" id="SSound" onKeyDown={handleSPressed} onClick={handleSPressed}>S<audio data-key="71" id="S" className="clip"  ref={audioElementS} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav"></audio>
</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary btn-block drum-pad" name="D" id="DSound" onKeyDown={handleDPressed} onClick={handleDPressed}>D<audio data-key="70"  id="D" className="clip"  ref={audioElementD}  src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav"></audio>
</button>
        </div>
        </div>
        <div className="row" style={{padding:"5px 5px 5px 5px"}}>
            <div className="col-4">
            <button className="btn btn-primary btn-block drum-pad" name="Z" id="ZSound" onKeyDown={handleZPressed} onClick={handleZPressed}>Z<audio data-key="69" id="Z" className="clip"  ref={audioElementZ}  src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav"></audio>
</button>
            </div>
            <div className="col-4">
            <button className="btn btn-primary btn-block drum-pad" name="X" id="XSound" onKeyDown={handleXPressed} onClick={handleXPressed}>X<audio data-key="82" id="X" className="clip"  ref={audioElementX} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav"></audio>
</button>
            </div>
            <div className="col-4">
            <button className="btn btn-primary btn-block  drum-pad" name="C" id="CSound" onKeyDown={handleCPressed} onClick={handleCPressed}>C<audio data-key="73"  id="C" className="clip"  ref={audioElementC} src="https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav"></audio></button>
                
            </div>
           
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <h2 className="block"style={{border:"4px solid green",backgroundColor:"grey", textAlign:"center"}} id="display">{instrumentName}</h2>
                    </div>
                    <div className="col-4"></div>
                </div>
            
</div>
    );
}
export default DrumSet;