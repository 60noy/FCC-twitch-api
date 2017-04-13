import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
const DropDown = (props) => {
  return (
      <DropDownMenu value={props.mode} onChange={props.onModeChange}>
        <MenuItem value={'all'} primaryText='all'/>
        <MenuItem value={'online'} primaryText='online'/>
        <MenuItem value={'offline'} primaryText='offline'/>
      </DropDownMenu>
);
}

export default DropDown;
