class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
 handleChange(event) {
   console.log(this.state.input)
    this.setState({ input: event.target.value })
 };
 submitMessage() {
    const a = this.state.messages.concat(this.state.input)
    console.log(a)
    this.setState({
      input:'',
      messages: a
    });}
  render() {
  const items = this.state.messages.map(item=>{return <li>{item}</li> }); 
    return (
// change code here
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
    <input type="text" value={this.state.input} 
    onChange={this.handleChange.bind(this)} />
    <button  onClick={this.submitMessage}  >Add message</button>
  <ul>
      {items}
  </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
