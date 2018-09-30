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
    this.state = {folding_item_style : copy_json(styles.folding_item), folding_item_text_style : copy_json(styles.folding_item_text)};

    this.updateStyles = this.updateStyles.bind(this);
  }

  componentDidUpdate(prevProps)
  {
    console.log(this.state)
    setTimeout(function(){
      var folding_item_text_style = copy_json(this.state.folding_item_text_style);
      if(this.state.folding_item_text_style.fontSize == '18px')
      {
        folding_item_text_style.fontSize = '0px';
        folding_item_text_style.opacity = '0';
      }else if (this.state.folding_item_text_style.fontSize == '0px') {
        folding_item_text_style.fontSize = '18px';
        folding_item_text_style.opacity = '1';
      }


      if(prevProps.visible !== this.props.visible){
        this.setState({folding_item_text_style : folding_item_text_style})
      }
    }.bind(this), 200)
  }

  updateStyles()
  {
    var folding_item_style = copy_json(this.state.folding_item_style);
    var folding_item_text_style = copy_json(this.state.folding_item_text_style);

    if(this.props.visible === true)
    {
      folding_item_style.visibility = 'visible';
      folding_item_style.height = '30px';
      folding_item_style.width = '300px'

    } else if (this.props.visible === false)
    {
      folding_item_style.visibility = 'hidden'
      folding_item_style.height = '0px'
      folding_item_style.width = '0px'

    }


    if(JSON.stringify(folding_item_style) !== JSON.stringify(this.state.folding_item_style)){
      this.setState({folding_item_style : folding_item_style, folding_item_text_style : folding_item_text_style})
    }
    else if(JSON.stringify(folding_item_text_style) !== JSON.stringify(this.state.folding_item_text_style)){
      this.setState({folding_item_style : folding_item_style, folding_item_text_style : folding_item_text_style})
    }

  }

  render()
  {
    this.updateStyles();

    return (
      <div className="folding-item" style={this.state.folding_item_style}>
        <p style={this.state.folding_item_text_style}>{this.props.text}</p>
      </div>
    )


  }
}
