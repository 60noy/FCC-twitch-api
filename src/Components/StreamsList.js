import React from 'react';
import {List} from 'material-ui/List';
import StreamItem from './StreamItem';
import PropTypes from 'prop-types';
const StreamsList = (props) => {
  return (
    <List>
      {props.data.map((streamer) => (
        <StreamItem
          name={streamer.name}
          status={streamer.status}
          hoverColor={streamer.online ? 'blue' : 'red'}
          avatar={streamer.logo}
          url={streamer.url}
      />)
      )}
  </List>
);
}

export default StreamsList

StreamsList.PropTypes ={
  data: PropTypes.array.isRequired,
}
