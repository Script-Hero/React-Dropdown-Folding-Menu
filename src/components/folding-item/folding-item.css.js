var folding_item = {
  width : '0px', // Transitions to 300px
  height : '0px', // Transitions to 30px
  border : '2px solid black',
  textAlign : 'center',
  display : 'table',
  visibility : 'hidden',
  transition : 'height .2s, width .1s',

  marginLeft : '40px',
  marginTop : '10px',
  borderTopRightRadius : '10px',
  borderBottomRightRadius : '10px',
  borderTopLeftRadius : '3px',
  borderBottomLeftRadius : '3px'
}

var folding_item_text = {
  display : 'table-cell',
  verticalAlign : 'middle',
  fontSize : '0px', // Transitions to 12 pixels
  opacity : '0', // Transitions to 1
  transition : 'opacity 1s'
}
export default {folding_item, folding_item_text}
