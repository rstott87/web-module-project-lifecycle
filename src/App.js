import React from 'react';
import User from './components/User'
import FollowerList from './components/FollowerList';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
      this.state = {
        searchedUser: '',
        user: {
          name: '',
          followersTotal: 0,
          reposTotal: 0,
          photo: ''
        },
        followers: [],
      }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      searchedUser: e.target.value,
    });
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log(this.state.searchedUser);
    axios.get(`https://api.github.com/users/rstott87`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: {
            name: resp.data.name,
            followersTotal: resp.data.followers,
            reposTotal:resp.data.public_repos,
            photo: resp.data.avatar_url
          },
          searchedUser: ''
        })
      })
  }

  render() {
    return(
      <div>
        <h2>
        Github Card
        </h2>
        <form onSubmit={this.handleSearch}>
          <label> Github User:
            <input type="text" value={this.state.searchedUser} onChange={this.handleChange}/>
          </label>
          <button>Search</button>
          <User name={this.state.user.name} 
                photo={this.state.user.photo} 
                reposTotal={this.state.user.reposTotal} 
                followersTotal={this.state.user.followersTotal}
          />
          <FollowerList/>
        </form>
        
    </div>);
  }
}

export default App;
