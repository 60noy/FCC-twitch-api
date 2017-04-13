import React from 'react';
import {List} from 'material-ui/List';
import StreamItem from './StreamItem';
const StreamsList = (props) => {
  return (
    <div>
    <List>
      {props.data.map((streamer) => (
        <StreamItem
          online={streamer.online}
          name={streamer.name}
          primaryText={streamer.name}
          hoverColor={streamer.online ? 'blue' : 'red'}
          avatar={streamer.avatar}
      />)
      )}
  </List>
</div>
);
}

export default StreamsList
