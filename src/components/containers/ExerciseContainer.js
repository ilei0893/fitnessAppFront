//1) showExerciseThunk, deleteExerciseThunk
//2) ExerciseView
import React, { Component } from "react";
import { connect } from "react-redux";
import { showExerciseThunk, deleteExerciseThunk } from "../../thunks";
import { ExerciseView } from "../views";
import axios from 'axios';

// Smart container;
class ExerciseContainer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      username: "johndoe98",
    }
  }
  componentDidMount() {
    console.log("hello from componentdidmount");
    console.log(this.props);
    this.props.showExercise(this.state.username);
    console.log(this.props);
  }
  
  handleDelete = (id) => {
    this.props.deleteExercise(id);
  }

  render() {
    console.log("--------------",this.props.username)
    return (
      <ExerciseView 
        allExercises={this.props.allExercises}
        username={this.props.username}
        handleDelete={this.handleDelete()}
      />
    );
  }
}

// Map state to props;
const mapStateToProps = (state) => {
  return {
    allExercises: state.exercises,
    username: state.username,
  };
}; 

// // Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
  return {
    showExercise: (username) => dispatch(showExerciseThunk(username)),
    deleteExercise: (id) => dispatch(deleteExerciseThunk(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseContainer);