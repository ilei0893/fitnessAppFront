import React from "react";
import './styles/ExerciseView.css';
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import ExerciseEntryContainer from "../containers/ExerciseEntryContainer";

const ExerciseView = (props) => {
  if (!props.allExercises.length) {
    return (
      <>
        {/* <ExerciseEntryContainer username = {props.username}/> */}
        <div className="all-exercises">No exercises</div>
      </>
    );
  }

  const calculateTotal = () =>{
    let totalCalsBurnt = 0;
    props.allExercises.map((exercise) => (totalCalsBurnt+=exercise.calories) )
    return totalCalsBurnt;
  }
  console.log("returning username from exccersive view", props.username)
  return(
    <>
    {/* <ExerciseEntryContainer username = {props.username}/>  */}
    <div className="all-foods">
      <h1 className="title">Your Exercises</h1>
      <center><p>Total calories burnt:{calculateTotal()}</p></center>
      <CardDeck>
        {props.allExercises.map((exercise) => (
          <Card className="card" key={exercise.name}>
            <Card.Body>
              <Card.Title>
                <h2>{exercise.name} </h2>
              </Card.Title>
              <Card.Text>Intensity: {exercise.intensity}</Card.Text>
              <Card.Text>Time: {exercise.time}</Card.Text>
              <Card.Text>Calories Burnt: {exercise.calories}</Card.Text>
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
