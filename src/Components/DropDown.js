import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {pink200} from 'material-ui/styles/colors';
const DropDown = (props) => {
  return (
      <DropDownMenu
        value={props.mode}
        onChange={props.onModeChange}
        selectedMenuItemStyle={{color:'#9C27B0'}}
        >
        <MenuItem value={'all'} primaryText='all'/>
        <MenuItem value={'online'} primaryText='online'/>
        <MenuItem value={'offline'} primaryText='offline'/>
      </DropDownMenu>
);
}

export default DropDown;
