import React from 'react'
import { Button } from './S2-Button.js'

class Counter extends React.Component {
    state = {
        value: 0
    }
    onClickPlus = () => {
        this.setState({value: this.state.value + 1})
    }
    onClickMinus = () => {
        this.setState({value: this.state.value - 1})
    }


    render () {
        return (
            <div className="wrap">
                <Button label="Plus" onClick={this.onClickPlus}/>
                {this.state.value}
                <Button label="Minus" onClick={this.onClickMinus}/>
            </div>
        )
    }
}

export default Counter;