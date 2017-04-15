import React from 'react';
import PropTypes from 'prop-types';
import {ListItem,Avatar} from 'material-ui';

 const StreamItem = (props) =>
    <ListItem
      primaryText={props.name}
      secondaryText={props.status}
      leftAvatar={
        <Avatar src={props.logo}/>
      }
      hoverColor={props.hoverColor}
      onClick={ () => window.location = props.url}
  />


StreamItem.PropTypes={
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
 export default StreamItem
