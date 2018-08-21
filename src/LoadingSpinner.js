import React, { Component } from "react";
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class LoadingSpinner extends Component{
  timer = null;
  
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render(){
    const { classes } = this.props;
    return (
      <div>
          <CircularProgress 
            variant="determinate"
            color="black"
            value={this.state.completed}
          />
      </div>
    );
  }
}

LoadingSpinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LoadingSpinner;
