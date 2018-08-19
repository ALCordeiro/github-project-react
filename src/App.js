import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import logoGithub from './GitHub-Mark-Light-64px.png';
import User from './User';
import './App.css';

class App extends Component {
  
  state = {
    user: {}
  }

  getUser = () => {
    const name = this.refs.name.value;
    fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: {
            id: data.id,
            avatar_url: data.avatar_url,
            username: data.login,
            name: data.name,
            location: data.location,
            profile: "https://www.github.com/"+data.login,
          }
        })
      })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <a target="_blank" href="https://www.github.com"><img src={logoGithub} className="pulse" alt="logo" /></a>
          <h1 className="App-title">Welcome to Github</h1>
        </header>
        <p className="App-intro">
          <input type="text" placeholder="Search Github" ref="name" class="search"/>
          <IconButton onClick={this.getUser} aria-label="Search">
            <SearchIcon/>
          </IconButton>
        </p>
        <User user={user}/>
      </div>
      
    );
  }
}

export default App;
