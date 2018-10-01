import React from 'react';
import styles from './head-foldable.css.js';
import {FaBars} from 'react-icons/fa';

import FoldingItem from './../folding-item/folding-item.js'

function clone_json(json){
  return JSON.parse(JSON.stringify(json));
}

export default class HeadFoldable extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {activated : false, head_foldable_styles : clone_json(styles.head_foldable_styles)};

    this.toggle_activated = this.toggle_activated.bind(this);
    this.construct_items = this.construct_items.bind(this);

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

  // Pass in a JSON object {text : "String", href : "String"}
  construct_items()
  {
    var items = this.props.items;
    var jsx_items = [];

    for(var i in items)
    {
      jsx_items.push(<FoldingItem text={items[i].text} href={items[i].href} visible={this.state.activated} />)
    }

    return jsx_items;
  }

  render()
  {
    var items = this.construct_items();

    return (
      <div className="head-foldable" onClick={this.toggle_activated} style={this.state.head_foldable_styles}>
        <div className="hamburger-container" style={styles.hamburger_container}>
          <FaBars style={styles.hamburger_styles}/>
        </div>

        {items}
      </div>
    )
  }
}
