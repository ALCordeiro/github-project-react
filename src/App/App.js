import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import logoGithub from "../GitHub-Mark-Light-64px.png";
import User from "../User/User";
import LoadingSpinner from "../LoadingSpinner";
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchUser } from '../Actions/userActions';
import "./App.css";

class App extends Component {

  state = {
    user: {},
    loading: false
  };

  // getUser = () => {
  //   const name = this.name.value;
  //   const url = `http://api.github.com/users/${name}`;
  //   const github_url = "https://www.github.com/";
  //   this.setState({loading: true});
  //   setTimeout(() => {
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(data => {
  //         this.setState({
  //           loading: false,
  //           user: {
  //             id: data.id,
  //             avatar_url: data.avatar_url,
  //             username: data.login,
  //             name: data.name,
  //             location: data.location,
  //             profile: github_url + data.login
  //           }
  //         });
  //       });
  //   }, 500);
  // };

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      this.props.fetchUser(this.name.value);
    }
  }

  render() {
    const { user, loading } = this.state;
    const github_url = "https://www.github.com";

    console.log(this.props);

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
          <IconButton className="search-icon" id="search" onClick={this.props.fetchUser} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </p>
        {this.props.loading ? <LoadingSpinner /> : this.props.user.user.id != null ? <User user={this.props.user.user} /> : <span></span>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUser:(user) =>{
      dispatch(fetchUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
