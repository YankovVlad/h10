import React from 'react'

class SignIn extends React.Component {
    state = {
        isSignedIn: false,
    }
    onClickButton = () => {
        setTimeout(() => {
            this.setState({ isSignedIn: !this.state.isSignedIn })
        }, 3000)
    }

    render() {
        return (
            <div className='wrap'>{this.state.isSignedIn ? (
                <span className='text'>Hello User</span>
            ) : (
                <button className='button' onClick={this.onClickButton}>Sign In</button>)}</div>
        )
    }
}

export default SignIn