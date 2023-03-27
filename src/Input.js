import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: ""
  }

onChange(e) {
    this.setState({text: e.target.value});
  }

onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }
   

render() {
    return (
     
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Type a message...            "
            autofocus="true"
            />
          <div class="chat-actions">
          <div class="positioning-container-chat-actions">
          <div class="action"> 
          <i class="fas fa-image"></i>
          <i class="fas fa-grin"></i>
          <i class="fas fa-camera"></i>
          </div>
          </div>
          </div>
          <button>Send</button>
        </form>
      </div>
    );
  }
}
  




export default Input;