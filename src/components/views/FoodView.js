import React from "react";
import "./styles/FoodView.css";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import ExerciseContainer from "../containers/ExerciseContainer";
import {Link} from "react-router-dom";
const FoodView = (props) => {
  if (!props.allFood.length) {
    return (
      <>
        <div className="all-foods">No foods</div>
      </>
    );
  }

  const calculateTotal = () =>{
    let totalCalsEaten = 0;
    props.allFood.map((food) => (totalCalsEaten+=food.calories) )
    return totalCalsEaten;
  }

  return (
    <>
      <div className="all-foods">
        <h1 className="title">Your Foods</h1>
        <center><p>Total calories eaten today: {calculateTotal()}</p></center>
        <div className="foodCards">
          <CardDeck>
            {props.allFood.map((food) => (
              <Card className="card" key={food.name}>
                <center><img
                  src={food.imageUrl}
                  alt={food.name}
                  className="card-img-top"
                /></center>
                <Card.Body>
                  <Card.Title>
                    <h2>{food.name} </h2>
                  </Card.Title>
                  <Card.Text>Calories: {food.calories}</Card.Text>
                  <Card.Text>fat: {food.fat}</Card.Text>
                  <Card.Text>carbs: {food.carbs}</Card.Text>
                  <Card.Text>protein: {food.protein}</Card.Text>
                  <Link className="btn btn-danger" to="/home" onClick={() => props.handleDelete(food.id)}>
                    Delete 
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </div>
      </div>
      <div className="all-exercises">
        <ExerciseContainer />
      </div>
    </>
  );
};

export default FoodView;
