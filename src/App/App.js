import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import logoGithub from "../GitHub-Mark-Light-64px.png";
import User from "../User/User";
import LoadingSpinner from "../LoadingSpinner";
import "./App.css";

class App extends Component {

  state = {
    user: {},
    loading: false,
  };

  getUser = () => {
    const name = this.refs.name.value;
    const url = `http://api.github.com/users/${name}`;
    this.setState({loading: true});
    setTimeout(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            loading: false,
            user: {
              id: data.id,
              avatar_url: data.avatar_url,
              username: data.login,
              name: data.name,
              location: data.location,
              profile: "https://www.github.com/" + data.login
            }
          });
        });
    }, 500);
  };

  handleKeyPress = (event) => {
    if (event.key == 'Enter'){
      this.getUser();
    }
  }

  render() {
    const { user, loading } = this.state;
    const github_url = "https://www.github.com";
    return (
      <div className="App">
        <header className="App-header">
          <a target="_blank" href={github_url}>
            <img src={logoGithub} className="pulse" alt="logo" />
          </a>
          <h1 className="App-title">Welcome to Github</h1>
        </header>
        <p className="App-intro">
          <input onKeyPress={this.handleKeyPress}
            type="text"
            placeholder="Search Github"
            ref="name"
            className="search"
          />
          <IconButton className="search-icon" id="search" onClick={this.getUser} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </p>
        {loading ? <LoadingSpinner /> : <User user={user} />}
      </div>
    );
  }
}

export default App;
