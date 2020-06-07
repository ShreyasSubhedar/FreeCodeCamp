// define ADD, addMessage(), messageReducer(), and store here:
const ADD="ADD";
function addMessage(me){
  return {
type:ADD,
message:me
  }
}

function messageReducer(state=[],action){
  switch(action.type){
    case ADD:
    return state.concat(action.message);
    default:
    return state;
  }
}
const store = Redux.createStore(messageReducer)
