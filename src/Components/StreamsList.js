import React from 'react';
import {List,Divider} from 'material-ui';
import StreamItem from './StreamItem';
import PropTypes from 'prop-types';
import {red200,green200,grey300} from 'material-ui/styles/colors';

const StreamsList = (props) => {
  return (
    <List>
      <div style={{border:'1px solid ' + grey300 }}>
      {props.data.map((streamer) =>
        <div>
        <StreamItem
          name={streamer.name}
          status={streamer.status}
          hoverColor={streamer.online ? green200 : red200}
          logo={streamer.logo}
          url={streamer.url}
          key={streamer.name}
      />
      <Divider inset={true}/>
    </div>
      )}
    </div>
  </List>
);
}

export default StreamsList

StreamsList.PropTypes ={
  data: PropTypes.array.isRequired,
}
