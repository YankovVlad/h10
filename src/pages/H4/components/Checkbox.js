import React from 'react'

class Checkbox extends React.Component {
    state = {
        active: false,
    }

    onCheckboxClick = () => {
        this.setState({active: !this.state.active})
    }

    render() {
        return (
            <div>
                <button onClick={this.onCheckboxClick}>{this.state.active ? 'x' : 'v'}</button>
    
            </div>
        )
    }

}

export default Checkbox;