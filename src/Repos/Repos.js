import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Folder from "@material-ui/icons/Folder";

class Repos extends Component {
  state = {
    repos: []
  };

  getRepositories = () => {
    fetch(`http://api.github.com/users/${this.props.user.username}/repos`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          repos: data
        });
      });
  }

  componentDidMount = () => {
    this.getRepositories();
  };

  componentDidUpdate = () => {
    this.getRepositories();
  };

  render() {
    const listItems = this.state.repos.map(d => (
      <List key={d.id}>
        <ListItem component="a" target="_blank" href={d.html_url} button>
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
          {d.name}
        </ListItem>
      </List>
    ));
    return <div>{listItems}</div>;
  }
}

export default Repos;
