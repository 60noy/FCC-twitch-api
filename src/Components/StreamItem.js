import React from 'react';
import propTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
 const StreamItem = (props) => {
  return (
    <ListItem
    primaryText={props.primaryText}
    secondaryText={props.secondaryText}
    leftAvatar={
      <Avatar src={props.avatar}/>
    }
    hoverColor={props.hoverColor}
  />
  );
}
 export default StreamItem
