// add Comment component here
import React, { Component } from 'react';

export default class ColorBox extends Component {
  
    render() {
      return (
        <div className="comment" style={{opacity: 2}}>
          {this.props.commentText}
          {this.props.commentText}
          {this.props.commentText}
        </div>
      )
    }
    
}