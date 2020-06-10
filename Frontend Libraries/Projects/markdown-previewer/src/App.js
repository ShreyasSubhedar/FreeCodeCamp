import React, { Component } from 'react';
import logo from './logo.svg';
const Markdown = require('react-markdown/with-html')

import './App.css';
const textStyle={
  fontSize: "25px",
  fontFamily: "Roboto"
  
}
const intial = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![Cool pic](https://picsum.photos/200/300)
`;

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
    <div id="preview" style={{overflow:"scroll", height:"450px"}}><Markdown id="preview" source={this.state.input.split('\n').join(' \n\n')} escapeHtml={false}/></div>
    </div>
  </div>
  </div>
    );
  }

}

export default App;
