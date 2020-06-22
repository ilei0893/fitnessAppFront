import React from "react";
// import './styles/FoodView.css';
// import { reduxForm, Field } from "redux-form"
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import FoodEntryContainer from "../containers/FoodEntryContainer";
const FoodView = (props) => {
  // console.log(props, "Props from foodview")
  if (!props.allFood.length) {
    return (
      <>
        <FoodEntryContainer />
        <div className="all-foods">No foods</div>
      </>
    );
  }
  
  return(
    <>
    {/* <FoodEntryContainer /> */}
    <div className="all-foods">
      <CardDeck>
        {props.allFood.map((food) => (
          <Card className="card" key={food.name}>
            <img
              src={food.imageUrl}
              width="50px"
              alt={food.name}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Title>
                <h2>{food.name} </h2>
              </Card.Title>
              <Card.Text>Calories: {food.calories}</Card.Text>
              <Card.Text>protein: {food.protein}</Card.Text>
              <Card.Text>carbs: {food.carbs}</Card.Text>
              <Card.Text>fat: {food.fat}</Card.Text>
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

export default FoodView;
