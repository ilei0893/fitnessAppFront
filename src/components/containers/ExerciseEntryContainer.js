import React, { Component } from "react";
import { connect } from "react-redux";
import { addFoodThunk, deleteFoodThunk } from "../../thunks";
import './App.css';
import Getexercises from './components/Getexercises'
import data from './data/data.json';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {timeValue: '', ExerciseOption : 'walking', intensity : '', hitSubmit : false};
  }

  handleChange = (event) =>{
    this.setState({timeValue: event.target.value});
    this.setState({hitSubmit : false});

  }
  handleSubmit = (event) =>{
    this.setState({hitSubmit : true});
    event.preventDefault();
  }

  setExerciseOption = (event) =>{
    this.setState({ExerciseOption : event.target.value})
  }

  setIntensity = (event) => {
    this.setState({intensity : event.target.value})
  }

  render(){
    const options = [...Object.keys(data)]
    console.log(options)
    
    return (
      <div className="exercise-form">
          {/* exercise entry form */}
        <form onSubmit={this.handleSubmit}>
          {/* options are filled in from our data.json KEYS */}
          <select value={this.state.ExerciseOption} id="button" onChange={this.setExerciseOption}>
          {options.map(option => (
          <option key={option} value={option}>{option}</option>
          ))}
          </select>
          <input type="text" value={this.state.timeValue} className="inputField" placeholder="how long?" onChange={this.handleChange} />
{/* ---------------------------------------------------------------------------------------------------------------- */}
            {/* radio buttons */}
              <div className="radioButtons">
              <input type="radio" id="low" name="intensity" value="low" onChange = {this.setIntensity}/>
              <label htmlFor="low">low</label>
              <input type="radio" id="med" name="intensity" value="med" onChange = {this.setIntensity} />
              <label htmlFor="med">med</label>
              <input type="radio" id="high" name="intensity" value="high" onChange = {this.setIntensity}/>
              <label htmlFor="high">high</label><br></br>
            </div>
{/* ---------------------------------------------------------------------------------------------------------------- */}
          <input type="submit" value="Submit" />
        </form>
            {/* checks if user hit submit, if they did, adds exercise to db */}
          {this.state.hitSubmit? <Getexercises exercise={this.state.ExerciseOption} intensity={this.state.intensity} time={this.state.timeValue}/> : null} 
      </div>
    );
  }
}


// // Map dispatch to props;
const mapDispatch = (dispatch, ownProps) => {
  return {
    addFood: (food) => dispatch(addFoodThunk(food, ownProps)),
    deleteFood: (id) => dispatch(deleteFoodThunk(id)),
  };
};

export default connect(null, mapDispatch)(FoodEntryContainer);