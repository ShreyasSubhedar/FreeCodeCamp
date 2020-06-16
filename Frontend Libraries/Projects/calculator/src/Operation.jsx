import React, { useState } from 'react'
const Operation = () => {
    const[mimi,setMimi]=useState(0);
 //   var globalSymbol='';
    const[expression,setExpression]= useState('0');
    const[carryExpression,setCarryExpression]= useState('');

        const getNo=(number)=> {
            setExpression( prevExpression=>{
            //     if(prevExpression[0]==='+'||prevExpression[0]==='-'||prevExpression[0]==='*'||prevExpression[0]==='/'){
            //     setCarryExpression(prevCarryExpression=>{
            //         return prevCarryExpression+expression;
            //     });
            //     setExpression('0');
            // }
                if(prevExpression[0]==='0'&& prevExpression[1]!=='.')
                return ''+number;
                return prevExpression+number;
            });
            console.log(expression);
          }
          const setDot=()=>{
            setExpression( prevExpression=>{
                if(prevExpression.indexOf('.')===-1 )
                return prevExpression+'.';
                return prevExpression;
            });
          }
          const getSymbol=(symbol)=> {
              if(symbol==='-' && (carryExpression[carryExpression.length-1]==='+'||carryExpression[carryExpression.length-1]==='-'||carryExpression[carryExpression.length-1]==='*'||carryExpression[carryExpression.length-1]==='/') )
            {//   setExpression(pr=>{
            //       return symbol+pr;
            //   });
                setMimi(1);
              return;
            }
            else if((carryExpression[carryExpression.length-1]==='+'||carryExpression[carryExpression.length-1]==='-'||carryExpression[carryExpression.length-1]==='*'||carryExpression[carryExpression.length-1]==='/')){
               setCarryExpression(prev=>{
                  // console.log("imag"+prev.slice(0,carryExpression.length-1)+symbol);
                    return prev.slice(0,carryExpression.length-1).concat(symbol);
               }) ;
               return ;
            }
            setCarryExpression(prevCarryExpression=>{
                if(prevCarryExpression==='')
                return expression+symbol
                else{
                    if(symbol==='-')
                return ''+(parseFloat(prevCarryExpression)- parseFloat(expression));
                if(symbol==='+')
                return ''+(parseFloat(prevCarryExpression)+ parseFloat(expression));
                if(symbol==='/')
                return ''+ (parseFloat(prevCarryExpression) / parseFloat(expression)).toFixed(4);
                if(symbol==='*')
                return ''+parseFloat(prevCarryExpression)* parseFloat(expression);    
                }
            });
            setExpression('0');
            console.log(expression);
          }
          const setClear = ()=>{
              setExpression('0');
              setCarryExpression('');
          }
          const setAnswer=()=>{
                    var No = parseFloat(carryExpression.slice(0,carryExpression.length-1));
                    var symbol = carryExpression[carryExpression.length-1];
                    console.log(No);
                    if(symbol==='-'){
                    setCarryExpression( ''+ (No- parseFloat(expression)));
                    setExpression(''+ (No- parseFloat(expression)));
                    }
                    if(symbol==='+'){
                    setCarryExpression( ''+((No)+ parseFloat(expression)));
                    setExpression( ''+((No)+ parseFloat(expression)));

                    }
                    if(symbol==='/')
                    {setCarryExpression( ''+ ((No) / parseFloat(expression).toFixed(4)));
                    setExpression(''+ ((No) / parseFloat(expression).toFixed(4)));
                }
                    if(symbol==='*'){
                    setCarryExpression( ''+ (No * parseFloat(expression)));   
                  setExpression(''+ (No * parseFloat(expression)));
                    }
                        if(mimi===1 && expression!==10){
                            console.log('here for mimi');
                            setExpression(prev=>{
                                return '-'+prev;
                            })
                            setMimi(0);
                        }
                        if(expression==='10-'){
                            setExpression('10');
                        }
              }
    return (
        <div className="col-sm-6 mt-5 border rounded" style={{ backgroundColor: "black" }}>
            <div className="row no-gutters ">
                <div className="col-12">
                    <input type="text" className="form-control" id="display1" style={{ border: "0", boxShadow: "none", backgroundColor: "black", color: "white", fontSize: "30px", borderRadius: "0", height: "50px" }} dir="rtl" value={carryExpression}  readOnly />
                </div>
            </div>

            <div className="row no-gutters ">
                <div className="col-12">
                    <input type="text" className="form-control " id="display" style={{ border: "0", boxShadow: "none", backgroundColor: "black", color: "white", fontSize: "30px", borderRadius: "0", height: "50px" }} dir="rtl" value={expression}  readOnly />
                </div>
            </div>

            <div className="row no-gutters border border-secondary">
                <div className="col-6">
                    <button className="btn btn-block" id="clear" onClick={setClear} style={{ backgroundColor: "red", borderRadius: "0", color: "white", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "50px" }}>AC</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block border border-secondary" id="multiply" onClick={()=> getSymbol('*')} style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "1px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "50px" }}>X</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="divide"onClick={()=> getSymbol('/')} style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "1px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "50px" }}>/</button>
                </div>
            </div >
            <div className="row no-gutters border border-secondary">
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="seven" value="7" onClick={() => getNo(7)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>7</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="eight" value="8" onClick={() => getNo(8)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>8</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="nine" value="9" onClick={() => getNo(9)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>9</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="add"  onClick={()=> getSymbol('+')} value="+" style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>+</button>
                </div>
            </div>
            <div className="row no-gutters border border-secondary">
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="four" onClick={() => getNo(4)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>4</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="five" onClick={() => getNo(5)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>5</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="six" onClick={() => getNo(6)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>6</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="subtract" onClick={()=> getSymbol('-')} style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>-</button>
                </div>
            </div >
            <div className="row no-gutters border border-secondary">
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="one" onClick={() => getNo(1)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>1</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="two" onClick={() => getNo(2)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>2</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="three" onClick={() => getNo(3)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>3</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-block btn-box border border-secondary" id="mod" style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>%</button>
                </div>
            </div>
            <div className="row no-gutters border border-secondary">
                <div className="col-4">
                    <button className="btn btn-block btn-box border border-secondary" id="zero" onClick={() => getNo(0)} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "70px" }}>0</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-block btn-box border border-secondary" id="decimal" onClick={setDot} style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "70px" }}>.</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-block btn-box border border-secondary" id="equals" onClick={setAnswer} style={{ backgroundColor: "#00FFFF", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "70px" }}>=</button>
                </div>
            </div >

        </div >

    );
}
export default Operation;