// A more concise version of the Button component
// can be expressed by removing the constructor
// thanks to class fields:

import React, { Component } from "react"

export default class Button2 extends Component {
    state = { buttonText: "Please click me!" }

    handleClick = () => {
        this.setState(() => {
            return { buttonText: "Thank you for clicking!"}
        })
    }

    render() {
        const { buttonText } = this.state
        return <button onClick={this.handleClick}>{buttonText}</button>
    }
}

