import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import IconButton from "@material-ui/core/IconButton";
import Repos from "../Repos/Repos";
import "./User.css";

class User extends Component {
  render() {
    const { user } = this.props;
    if (user.id != null) {
      return (
        <div>
          <Card className="card" style={{ overflow: "auto", height: "100%", flex:"1", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
            <CardHeader
              className="header"
              avatar={
                <Avatar
                  aria-label="Recipe"
                  className="avatar"
                  src={user.avatar_url}
                />
              }
              action={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={user.profile}
                >
                  <IconButton>
                    <KeyboardArrowRight />
                  </IconButton>
                </a>
              }
              title={user.name}
              subheader={user.username}
            />
            <CardContent>
              <Repos user={user} />
            </CardContent>
          </Card>
        </div>
      );
    }
    return null;
  }
}

export default User;
