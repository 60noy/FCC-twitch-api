import React from 'react';
import StreamsList from './StreamsList';
import Streams from '../Container/Streams';
import DropDown from './DropDown';
import {List,ListItem} from 'material-ui/List';
import {TextField} from 'material-ui';

import './Main.css';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      mode: 'all',
      input: ''
    }
  }

  // handles click of the item list
  handleItemClick = (streamer,index) => {
    alert(streamer.name)
  }
  // changes the mode in the state
  // there are 3 modes: all , online and offline
  handleModeChange = (e,index,value) => {
    this.setState({mode: value})
  }

  handleInputChange =(e,input) =>{
    this.setState({input})
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          Twitch API Viewer
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <TextField
            onChange={this.handleInputChange}
            hintText='Search for a stream'
            value={this.state.input}
            underlineFocusStyle={{borderColor:'#000'}}
          />
          <DropDown
            mode={this.state.mode}
            onModeChange={this.handleModeChange}
          />
        </div>
        <Streams
          mode={this.state.mode}
          input={this.state.input}
        />
    </div>

  );
  }
}
