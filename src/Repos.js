import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Folder from '@material-ui/icons/Folder';

class Repos extends Component {

    state = {
         repos: []
    }

    componentDidMount  = () => {
          fetch(`http://api.github.com/users/${this.props.user.username}/repos`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    repos: data,
                })
            })
    }
    
    render(){
        const listItems = this.state.repos.map((d) => <List key={d.id}><ListItem button><Folder/>{d.name}</ListItem></List>);
        return(
            <div>{listItems}}</div>
        );
    }
}

export default Repos;