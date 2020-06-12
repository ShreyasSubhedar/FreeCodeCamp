import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state={
      expressionEval:'',
      currentExp:'0' 
    }
    this.clearCalculation = this.clearCalculation.bind(this);
    this.numberSeven=this.numberSeven.bind(this);
    this.numberEight= this.numberEight.bind(this);
    this.numberNine= this.numberNine.bind(this);
    this.numberFour= this.numberFour.bind(this);
    this.numberFive= this.numberFive.bind(this);
    this.numberSix= this.numberSix.bind(this);
    this.numberOne= this.numberOne.bind(this);
    this.numberTwo= this.numberTwo.bind(this);
    this.numberThree= this.numberThree.bind(this);
    this.numberZero= this.numberZero.bind(this);
    this.signPlus= this.signPlus.bind(this);
    this.signMinus= this.signMinus.bind(this);
    this.signMultiply= this.signMultiply.bind(this);
    this.signDivide= this.signDivide.bind(this);
    //this.signModule= this.signModule.bind(this);
    this.signDecimal= this.signDecimal.bind(this);
  }
  signDecimal(event){
    if(this.state.currentExp.indexOf('.')>=0||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      {
       return ;
    }
    this.setState(state=>{
    return {
      expressionEval:this.state.expressionEval+'.',
      currentExp:this.state.currentExp+'.'
    }
  });
  }
  signPlus(event){
    this.setState(state=>{
    return {
      expressionEval:this.state.expressionEval+'+',
      currentExp:'+'
    }
  });
  }
  signMinus(event){
    this.setState(state=>{
      if(this.state.currentExp.indexOf('.')>=0||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      return {
      expressionEval:this.state.expressionEval+'-',
      currentExp:'-'
    }
  });
  }
  signDivide(event){
    this.setState(state=>{
    return {
      expressionEval:this.state.expressionEval+'/',
      currentExp:'/'
    }
  });
  }
  signMultiply(event){
    this.setState(state=>{
    return {
      expressionEval:this.state.expressionEval+'*',
      currentExp:'*'
    }
  });
  }
  numberZero(event){
    this.setState(state=>{
            if(this.state.expressionEval=='0'){
      this.state.expressionEval=''

            }
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'0',
        currentExp:this.state.currentExp+'0'
      }
    })
  }
  numberSeven(event){  
    this.setState(state=>{
            if(this.state.expressionEval=='0')
      this.state.expressionEval=''
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'7',
        currentExp:this.state.currentExp+'7'
      }
    })
  }
  numberEight(event){  
    this.setState(state=>{
            if(this.state.expressionEval=='0')
      this.state.expressionEval=''
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'8',
        currentExp:this.state.currentExp+'8'
      }
    })
  }
  numberNine(event){  
    this.setState(state=>{
            if(this.state.expressionEval=='0')
      this.state.expressionEval=''
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'9',
        currentExp:this.state.currentExp+'9'
      }
    })
  }
  numberFour(event){  
    this.setState(state=>{
            if(this.state.expressionEval=='0')
      this.state.expressionEval=''
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'4',
        currentExp:this.state.currentExp+'4'
      }
    })
  }
  numberFive(event){  
    this.setState(state=>{
            if(this.state.expressionEval=='0')
      this.state.expressionEval=''
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'5',
        currentExp:this.state.currentExp+'5'
      }
    })
  }
  numberSix(event){  
    this.setState(state=>{
            if(this.state.expressionEval=='0')
      this.state.expressionEval=''
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'6',
        currentExp:this.state.currentExp+'6'
      }
    })
  }
  numberOne(event){  
    this.setState(state=>{
            if(this.state.expressionEval=='0')
      this.state.expressionEval=''
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'1',
        currentExp:this.state.currentExp+'1'
      }
    })
  }
  numberTwo(event){  
    this.setState(state=>{
            if(this.state.expressionEval=='0')
      this.state.expressionEval=''
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'2',
        currentExp:this.state.currentExp+'2'
      }
    })
  }
  numberThree(event){  
    this.setState(state=>{
            if(this.state.expressionEval=='0')
      this.state.expressionEval=''
      if(this.state.currentExp=='0'||this.state.currentExp=='+'||this.state.currentExp=='-'||this.state.currentExp=='/'||this.state.currentExp=='*'||this.state.currentExp=='%')
      this.state.currentExp=''
      return {
        expressionEval:this.state.expressionEval+'3',
        currentExp:this.state.currentExp+'3'
      }
    })
  }
  clearCalculation(event){
    this.setState(state=>
      {return {expressionEval:'',
                currentExp:'0'
              }
            });
  }
  render() {
    return (
      <div className="container">
        <strong><h2 style={{ fontFamily: "ubuntu", textAlign: "center" }}>Calculator</h2></strong>

        <div className="row" style={{ borderBlock: "5px block" }}>
          <div className="col-sm-3"></div>
          <div className="col-sm-6 mt-5 border rounded" style={{ backgroundColor: "black" }}>
            <div className="row no-gutters ">
              <div className="col-12">
                <input type="text" className="form-control" id="display1"style={{ border: "0", boxShadow: "none", backgroundColor: "black", color: "white", fontSize: "30px", borderRadius: "0", height: "50px" }} dir="rtl" value={this.state.expressionEval} readOnly />
              </div>
            </div>

            <div className="row no-gutters ">
              <div className="col-12">
                <input type="text" className="form-control " id="display" style={{ border: "0", boxShadow: "none", backgroundColor: "black", color: "white", fontSize: "30px", borderRadius: "0", height: "50px" }} dir="rtl" value={this.state.currentExp} readOnly />
              </div>
            </div>

            <div className="row no-gutters border border-secondary">
              <div className="col-6">
                <button className="btn btn-block" id="clear" style={{ backgroundColor: "red", borderRadius: "0", color: "white", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "50px" }} onClick={this.clearCalculation}>AC</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block border border-secondary"  id="multiply" style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "1px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "50px" }} onClick={this.signMultiply}>X</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary" id="divide" style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "1px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "50px" }}onClick={this.signDivide}>/</button>
              </div>
            </div>
            <div className="row no-gutters border border-secondary">
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary"id="seven" onClick={this.numberSeven}  value="7" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>7</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary"id="eight" onClick={this.numberEight}  value="8" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>8</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary"id="nine" onClick={this.numberNine}  value="9" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>9</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary" id="add" onClick={this.signPlus}  value="+" style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>+</button>
              </div>
            </div>
            <div className="row no-gutters border border-secondary">
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary"onClick={this.numberFour} id="four" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>4</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary"onClick={this.numberFive} id="five" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>5</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary"onClick={this.numberSix} id="six" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>6</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary" id="subtract" style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}onClick={this.signMinus}>-</button>
              </div>
            </div>
            <div className="row no-gutters border border-secondary">
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary"  onClick={this.numberOne} id="one" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>1</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary" onClick={this.numberTwo} id="two" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>2</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary" onClick={this.numberThree} id="three" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>3</button>
              </div>
              <div className="col-3">
                <button className="btn btn-block btn-box border border-secondary" id="mod"style={{ backgroundColor: "#FFAA1D", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "60px" }}>%</button>
              </div>
            </div>
            <div className="row no-gutters border border-secondary">
              <div className="col-4">
                <button className="btn btn-block btn-box border border-secondary" onClick={this.numberZero} id="zero" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "70px" }}>0</button>
              </div>
              <div className="col-4">
                <button className="btn btn-block btn-box border border-secondary" id="decimal" style={{ backgroundColor: "white", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "70px" }}onClick={this.signDecimal}>.</button>
              </div>
              <div className="col-4">
                <button className="btn btn-block btn-box border border-secondary" id="equals" style={{ backgroundColor: "#00FFFF", borderRadius: "0", border: "2px block", fontSize: "30px", fontFamily: "Courier", padding: "2 5 5 5", height: "70px" }}>=</button>
              </div>
            </div>

          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default App;
