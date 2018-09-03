import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Folder from "@material-ui/icons/Folder";
import { connect } from 'react-redux';
import { fetchRepos } from '../Actions/reposActions';

class Repos extends Component {
  
  componentDidMount = () => {
    this.props.fetchRepos(this.props.user.login);
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.user.login !== prevProps.user.login)
      this.props.fetchRepos(this.props.user.login);
  };

  render() {
    const listItems = this.props.repos.repos.map(d => (
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

const mapStateToProps = state => ({
  repos: state.repos
});

const mapDispatchToProps = (dispatch) => {
  return{
    fetchRepos:(username) =>{
      dispatch(fetchRepos(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
