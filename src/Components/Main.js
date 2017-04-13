import React from 'react';
import StreamsList from './StreamsList';
import DropDown from './DropDown';
import propTypes from 'prop-types';
import {List,ListItem} from 'material-ui/List';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data: [{online:false,name:'dsadas'},{online:true,name:'dada'},{online:false,name:'gdaas'}],
      mode: 'all'
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

  render() {
    return (
      <div style={{flex:1, justifyContent:'center',alignItems:'center',marginLeft:'20%',marginRight:'20%'}}>
        <DropDown
          mode={this.state.mode}
          onModeChange={this.handleModeChange}
        />
        <StreamsList data={this.state.data}/>
    </div>

  );
  }
}

Main.propTypes = {
};
