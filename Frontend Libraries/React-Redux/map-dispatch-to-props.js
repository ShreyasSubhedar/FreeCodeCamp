const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line
function mapDispatchToProps(dispatch){
 return {
   submitNewMessage : (message)=>{
    dispatch(addMessage(message));
  }
 }
}