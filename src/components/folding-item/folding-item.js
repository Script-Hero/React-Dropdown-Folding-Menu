import React from 'react';
import styles from './folding-item.css.js';

function copy_json(json_obj)
{
  return JSON.parse(JSON.stringify(json_obj));
}
export default class FoldingItem extends React.Component
{
  constructor(props)
  {
    super(props);

    console.log(props)

    this.state = {style : copy_json(styles.FoldingItem)};
  }

  render()
  {

    var style = copy_json(styles.FoldingItem);
    console.log(this.props.visible)
    if(this.props.visible === true)
    {
      console.log('true')
      style.visibility = 'visible'
    } else if (this.props.visible === false)
    {
      console.log('false')
      style.visibility = 'hidden'
    }

    return (
      <div className="folding-item" style={style}>
        <p style={styles.folding_item_text}>{this.props.text}</p>
      </div>
    )


  }
}
