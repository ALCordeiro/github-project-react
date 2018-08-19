import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import Repos from './Repos';
import './User.css';

class User extends Component{

    render(){
        const { user } = this.props;
        if (user.id != null) {
            return(
                <div onLoad={() => this.getRepositories}>
                    <Card className="card" onLoad={() => this.getRepositories}>
                        <CardHeader className="header" avatar={<Avatar aria-label="Recipe" className="avatar" src={user.avatar_url}></Avatar>} action={<a target="_blank" href={user.profile}><IconButton><KeyboardArrowRight /></IconButton></a>} title={user.name} subheader={user.username}>
                        </CardHeader>
                        <CardContent>
                            <Repos user={user}></Repos>
                        </CardContent>
                    </Card>
                </div>
            );
        }
        else{
            return(null);
        }
    }
}

export default User;