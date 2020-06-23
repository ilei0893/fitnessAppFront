//1) showExerciseThunk, deleteExerciseThunk
//2) ExerciseView
import React, { Component } from "react";
import { connect } from "react-redux";
import { showExerciseThunk, deleteExerciseThunk } from "../../thunks";
import { ExerciseView } from "../views";


// Smart container;
class ExerciseContainer extends Component {
  componentDidMount() {
    this.props.showExercise(this.props.username);
  }
  
  handleDelete = (id) => {
    this.props.deleteExercise(this.props.username,id);
  }

  render() {
    return (
      <ExerciseView 
        allExercises={this.props.allExercises}
        username={this.props.username}
        handleDelete={this.handleDelete}
      />
    );
  }
}

// Map state to props;
const mapStateToProps = (state) => {
  return {
    allExercises: state.exercise,
    username: state.user.username,
  };
}; 

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
  return {
    showExercise: (username) => dispatch(showExerciseThunk(username)),
    deleteExercise: (username,id) => dispatch(deleteExerciseThunk(username,id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseContainer);