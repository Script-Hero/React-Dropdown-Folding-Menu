import React from 'react';
import HeadFoldable from './../head-foldable/head-foldable.js';

export default class Menu extends React.Component
{

  render()
  {
    var items = this.props.items;
    return (
      <div id="menu">
        <HeadFoldable items={items}>
        </HeadFoldable>
      </div>
    )
  }
}
