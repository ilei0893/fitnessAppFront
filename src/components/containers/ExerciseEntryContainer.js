import React, { Component } from "react";
import { connect } from "react-redux";
import { addExerciseThunk } from "../../thunks";
import data from '../../data/data.json';

class ExerciseEntryContainer extends Component{
  constructor(props){
    super(props);
    this.state = {timeValue: '', ExerciseOption : 'walking', intensity : '', hitSubmit : false};
  }

  handleChange = (event) =>{
    this.setState({timeValue: event.target.value});
    console.log("set timeValue option in state to", event.target.value)
    console.log("calling this.state.timeValue: ", this.state.timeValue)
    this.setState({hitSubmit : false});
    console.log("calling USERNAME FROM ENTRY CONTAINER", this.props.username)
  }
  handleSubmit = (event) =>{
    this.setState({hitSubmit : true});
    event.preventDefault();
    const toAdd = {
        name : this.state.ExerciseOption,
        intensity : this.state.intensity,
        time : this.state.timeValue,
        usernameId : this.props.username
    }
    this.props.addExercise(toAdd);
  }

  setExerciseOption = (event) =>{
    this.setState({ExerciseOption : event.target.value})
    console.log("set exercise option in state to", event.target.value)
    event.preventDefault();

  }

  setIntensity = (event) => {
    this.setState({intensity : event.target.value})
    console.log("set intensity option in state to", event.target.value)

    event.preventDefault();

  }



  getExercises = () => {
    const exercise = this.state.ExerciseOption;
    const time = this.state.timeValue;
    const intensity = this.state.intensity;
    const calsBurnt = Math.floor( (data[exercise])[intensity] * time );
    console.log("input is: ",exercise)
    console.log("time is", time)
    console.log("intensity is", intensity)
    return (
        <div>
            {calsBurnt} calories burnt
        </div>
    )

}

  render(){
    const options = [...Object.keys(data)]
    console.log(options)
    console.log("LOGGING USERNAME: ", this.props.username)
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
          {this.state.hitSubmit? this.getExercises() : null} 
      </div>
    );
  }
}


// // Map dispatch to props;
const mapDispatch = (dispatch, ownProps) => {
  return {
    addExercise: (exercise) => dispatch(addExerciseThunk(exercise, ownProps)),
  };
};

export default connect(null, mapDispatch)(ExerciseEntryContainer);