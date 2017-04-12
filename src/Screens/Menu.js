import React, {PropTypes} from 'react';
import propTypes from 'prop-types';
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      streamers : []
    }
  }

  render() {
    return (
      <div>
        <StreamsList data={this.state.data}/>
    </div>
  );
  }
}

Menu.propTypes = {
};
