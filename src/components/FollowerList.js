import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div className='FollowersContainer'>
                <div> 
                    {this.props.followers.map(name=>
                         <Follower key={name.id} follower={name}/> 
                    )} 
                </div>

            </div>
        )
    }
}

export default FollowerList