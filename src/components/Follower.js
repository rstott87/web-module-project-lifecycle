import React from 'react';

class Follower extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className='FollowerContainer'>
                <div> FOLLOWER NAME: {this.props.follower.login}</div>
                <img src={this.props.follower.avatar_url} alt="google.com" />
            </div>
        )
    }
}

export default Follower