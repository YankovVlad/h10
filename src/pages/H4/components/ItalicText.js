import React from 'react'

class ItalicText extends React.Component {
    state = {
        italic: false,
    }

    onTextClick = () => {
        this.setState({italic: !this.state.italic})
    }


    render () {
        return ( 
        <h3 onClick={this.onTextClick} className={this.state.italic ? 'text-italic' : ''}>
           Previously, I also led the adventurous road, and then I shot in the knee.
        </h3>
        )
    }
}
export default ItalicText;