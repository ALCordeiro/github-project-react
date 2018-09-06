import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import logoGithub from "../GitHub-Mark-Light-64px.png";
import User from "../User/User";
import LoadingSpinner from "../LoadingSpinner";
import { connect } from 'react-redux';
import { fetchUser } from '../Actions/userActions';
import "./App.css";

class App extends Component {

  state = {
    user: {},
    loading: false
  };

  getUser = () => {
    this.props.fetchUser(this.name.value);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      this.props.fetchUser(this.name.value);
    }
  }

  render() {
    const github_url = "https://www.github.com";
    const { loading, user } = this.props;
    console.log(this.props.user.user);
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
        {loading ? <LoadingSpinner /> : this.props.user.user.id != null ? <User user={this.props.user.user} /> : <span></span>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  loading: state.user.loading
});

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUser:(user) =>{
      dispatch(fetchUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
