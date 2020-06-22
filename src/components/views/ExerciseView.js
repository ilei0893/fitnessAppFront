import React from "react";
// import './styles/FoodView.css';
// import { reduxForm, Field } from "redux-form"
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import ExerciseEntryContainer from "../containers/ExerciseEntryContainer";

const ExerciseView = (props) => {
  if (!props.allExercises.length) {
    return (
      <>
        <ExerciseEntryContainer username = {props.username}/>
        <div className="all-exercises">No exercises</div>
      </>
    );
  }
  console.log("returning username from exccersive view", props.username)
  return(
    <>
    <ExerciseEntryContainer username = {props.username}/> 
    <div className="all-foods">
      <CardDeck>
        {props.allExercises.map((exercise) => (
          <Card className="card" key={exercise.name}>
            <Card.Body>
              <Card.Title>
                <h2>{exercise.name} </h2>
              </Card.Title>
              <Card.Text>Intensity: {exercise.intensity}</Card.Text>
              <Card.Text>Time: {exercise.time}</Card.Text>
              {/* <Link
                  className="btn btn-danger"
                  to="/foods"
                  onClick={() => props.handleDelete(food.id)}
                >
                  Delete
                </Link> */}
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>

    </>
    );
};

const Search = (props) => {};

export default ExerciseView;
