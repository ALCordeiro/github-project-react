import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import logoGithub from "../GitHub-Mark-Light-64px.png";
import User from "../User/User";
import LoadingSpinner from "../LoadingSpinner";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../Actions';
import "./App.css";

class App extends Component {

  state = {
    user: {},
    loading: false,
    inputValue: ''
  };

  getUser = () => {
    const name = this.name.value;
    const url = `http://api.github.com/users/${name}`;
    const github_url = "https://www.github.com/";
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
              profile: github_url + data.login
            }
          });
        });
    }, 500);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      this.getUser();
    }
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { user, loading } = this.state;
    const github_url = "https://www.github.com";
    const { clickButton, newValue } = this.props;

    const { inputValue } = this.state;

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
            ref={(name) => {this.name = name}}
            className="search"
            id="search_input"
          />
          <IconButton className="search-icon" id="search" onClick={this.getUser} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </p>
        {loading ? <LoadingSpinner /> : user.id != null ? <User user={user} /> : <span></span>}
        <input type='text' onChange={this.inputChange} value={inputValue}/>
        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
