import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Markdown from 'react-markdown'

const textStyle={
  fontSize: "25px",
  fontFamily: "Roboto"
  
}
const intial = "# hello \n## you are using markdown \n### this is awesome\n - all set!!\n   - simple \n***\n*paste your markdown*\n***\n ![img](https://picsum.photos/200/300)";
class App extends Component {
  constructor(props){
    super(props)
    this.state={
    input:intial
    }
    this.ontextEnter=this.ontextEnter.bind(this);
    this.keyPressed=this.keyPressed.bind(this);

  }
  ontextEnter(event) {
    console.log(this.state.input)
     this.setState({ input: event.target.value })
  };
  keyPressed(event){
    if (event.key === "Enter") {
      
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
          <h1 style={{fontFamily:"ubuntu"}}>Markdown Previewer</h1>
          </div>
          </div>
  <div className="row">
    <div className="col-6 text-center  " style={{borderRight:"10px solid green", borderLeft:"1px solid",borderTop:"1px solid", borderBottom:"1px solid", height:"500px"}}>
      <h2 style={{fontFamily:"ubuntu"}}>Editor</h2>
      <textarea className="form-control"  onKeyPress={this.keyPressed} id="editor" onChange={this.ontextEnter} rows="17" placeholder="Enter the text in markdown manner........" textarea={textStyle}>{intial}</textarea>
  </div>
    <div className="col-6"  style={{borderRight:"1px solid", borderLeft:"10px solid red",borderTop:"1px solid", borderBottom:"1px solid"}}>
    <h2 style={{fontFamily:"ubuntu",textAlign:"center"}}>Preview {}</h2>
    <div id="preview" style={{overflow:"scroll", height:"450px"}}><Markdown id="preview" source={this.state.input.split('\n').join(' \n\n')}  /></div>
    </div>
  </div>
  </div>
    );
  }

}

export default App;
