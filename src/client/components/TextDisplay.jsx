import React from 'react';

class TextDisplay extends React.Component {

  render() {
    return (
      <div>
        {this.props.passedDownText}
      </div>
    )
  }
}

export default TextDisplay;


