import React, { Component } from "react"

export default class Button extends Component {
    constructor() {
        super()
        this.state = { buttonText: "Click away!" }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(() => {
            return { buttonText: "Oh yeah, that's the stuff!"}
        })
    }

    render() {
        const { buttonText } = this.state
        return <button onClick={this.handleClick}>{buttonText}</button>
    }
}

// The component's internal state gets mutated by setState when clicking the button.  The text's button in turn reacts to this state and gets the updated text.