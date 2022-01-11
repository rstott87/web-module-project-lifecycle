import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className='UserContainer'>
                <img src={this.props.photo} alt="google.com" />
                <div> NAME: {this.props.name} </div>
                <div> TOTAL REPOS: {this.props.reposTotal}</div>
                <div> TOTAL FOLLOWERS: {this.props.followersTotal}</div>
            </div>
        )
    }
}

export default User