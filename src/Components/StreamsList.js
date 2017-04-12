import React, {PropTypes} from 'react';
import propTypes from 'prop-types';
export const StreamsList = (props) => {
  return (
    <div>
      {this.props.data.map((streamer) =>
        <StreamItem
          online={streamer.online}
          name={streamer.name}
      />
      )}
  </div>
);
}

StreamsList.propTypes = {
};
