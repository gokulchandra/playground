import React, { Component, PropTypes } from 'react'

class IncrementButton extends Component {
  
  render() {

  	const {store, counterReducer} = this.props

    return (
    <div>
          <input type="button" onClick={this.props.actions.inc} value="Inc" />
    </div>
    )
  }
}

export default IncrementButton