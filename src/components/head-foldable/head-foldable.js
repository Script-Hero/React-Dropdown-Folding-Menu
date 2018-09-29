import React from 'react';
import styles from './head-foldable.css.js';

import {FaBars} from 'react-icons/fa'

function clone_json(json){
  return JSON.parse(JSON.stringify(json));
}

export default class Head_Foldable extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {activated : false, head_foldable_styles : clone_json(styles.head_foldable_styles)};

    this.toggle_activated = this.toggle_activated.bind(this);
  }

  toggle_activated()
  {
    var isActivated = !this.state.activated;
    var new_width;
    if(isActivated)
    {
      new_width = '100px';
    }
    else {
      new_width = '50px';
    }

    var new_head_foldable_styles = clone_json(this.state.head_foldable_styles);
    new_head_foldable_styles.width = new_width;

    this.setState({activated : !this.state.activated, head_foldable_styles : new_head_foldable_styles});
  }

  render()
  {
    return (
      <div className="head-foldable" onClick={this.toggle_activated} style={this.state.head_foldable_styles}>
        <div className="hamburger-container" style={styles.hamburger_container}>
          <FaBars style={styles.hamburger_styles}/>
        </div>
      </div>
    )
  }
}
