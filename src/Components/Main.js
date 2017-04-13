import React from 'react';
import StreamsList from './StreamsList';
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

  handleItemClick = (streamer,index) => {
    alert(streamer.name)
  }

  render() {
    return (
      <div style={{flex:1, justifyContent:'center',alignItems:'center',marginLeft:'20%',marginRight:'20%'}}>
        <DropDownMenu value={this.state.mode} onChange={this.handleModeChange} targetOrigin='right'>
          <MenuItem value={1} primaryText='all'/>
          <MenuItem value={2} primaryText='online'/>
          <MenuItem value={3} primaryText='offline'/>
        </DropDownMenu>
        <StreamsList data={this.state.data}/>

    </div>

  );
  }
}

Main.propTypes = {
};
