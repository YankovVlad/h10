import React from 'react';

class SayHiLoader extends React.Component {
  state = {
    loading: false,
    greeting: false,
  }

  onClickButton = () => {
    setTimeout(() => {
      this.setState({ loading: false, greeting: true })
    }, 3000)
    this.setState({ loading: true })
  }


  render() {
    return (
      <div className='wrap'>
        <button className='button' onClick={this.onClickButton}>Say Hi</button>
        {this.state.loading && (<div className='h5__loader'></div>)}
        {this.state.greeting && (<span className='text'>Hi everyone!!!</span>)}
      </div>
    )
  }
}

export default SayHiLoader