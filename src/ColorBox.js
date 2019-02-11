import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newOp = +(this.props.opacity - .1).toFixed(1)
    console.log(this.props.opacity)
    if (newOp >= 0.1) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newOp}/>
        </div>

      )
    } else {
      return null
    }
    
  }
  
}
