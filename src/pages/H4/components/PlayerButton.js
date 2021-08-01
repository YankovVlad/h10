import React from 'react';

class PlayerButton extends React.Component {
    state = {
        repeatPlaylist: false,
        repeatTrack: false,
        // For way 2
        stateId: '1',
    }
    
    onButtonClick = () => {
        if(this.state.repeatTrack === true && this.state.repeatPlaylist === true) {
            this.setState({repeatPlaylist: false, repeatTrack: false})
        }
        if (this.state.repeatPlaylist === false) {
            this.setState({repeatPlaylist: !this.state.repeatPlaylist})
        }  
        if (this.state.repeatPlaylist && this.state.repeatTrack === false) {
            this.setState({repeatTrack: !this.state.repeatTrack})
        }
    }

    // Second way

    onButtonClickWay2 = (value) => {
        switch (value) {
            case '1' : this.setState({stateId: '2'})
            break;
            case '2' : this.setState({stateId: '3'})
            break;
            case '3' : this.setState({stateId: '1'})
            break;
        }
    }
    checkStateId = (value) => {
        switch (value) {
            case '1' : return 'no repeat'
            case '2' : return 'repeat playlist'
            case '3' : return 'repeat track'
        }
    }
    // \\\\\\\\\\\\\\
    
    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>
                    {(this.state.repeatPlaylist && this.state.repeatTrack) ? 'repeat track' : (this.state.repeatPlaylist ? 'repeat playlist' : 'no repeat')}
                </button>
            </div>

            // <div>
            // <button onClick={() => this.onButtonClickWay2(this. state.stateId)}>
            //     {this.checkStateId(this.state.stateId)}
            // </button>
            // </div>
            
        )
    }
}
export default PlayerButton