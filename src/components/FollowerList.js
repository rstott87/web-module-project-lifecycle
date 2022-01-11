import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div className='FollowersContainer'>
                <div> FOLLOWERS: </div>
                <Follower/>
            </div>
        )
    }
}

export default FollowerList