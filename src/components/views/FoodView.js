import React from "react";
// import './styles/FoodView.css';
// import { reduxForm, Field } from "redux-form"
import PropTypes from "prop-types";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

const FoodView = (props) => {
    const {handleSubmit} = props
    return (

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
    );
    // return (
    //   <div className="meal-plan">
    //     <div className="container col-4">
    //         <h2>Meals</h2>
    //         <form onSubmit={handleSubmit}>
    //           <div className="form-group">
    //           {/* <label htmlFor="breakfast">Breakfast</label> */}
    //             <Field name="breakfast" component="input" type="text" className="form-control form-control-md" placeholder="Meal" name="meal"/>
    //           </div>
    //           {/* <div className="form-group">
    //           <label htmlFor="lunch">Lunch</label>
    //             <Field name="lunch" component="input" type="text" className="form-control" placeholder="Lunch" name="lunch"/>
    //           </div>
    //           <div className="form-group">
    //           <label htmlFor="dinner">Dinner</label>
    //             <Field name="dinner" component="input" type="text" className="form-control form-control-md" placeholder="Dinner" name="dinner"/>
    //           </div> */}
    //           <button type="submit" className="btn btn-primary btn-block">Submit</button>
    //         </form>
    //     </div>
    //     <div className="container row ">
    //       {
    //         props.meal.map( (item,index) => (
    //           <div style={{top : 20 }} key={index} className="col-4 text-center d-flex justify-content-center">
    //                 < div className="col-6">
    //                   <h3>{item.name}</h3>
    //                    <ul className="list-group">
    //                    <li className="list-group-item"> Calories {item.calories}</li>
    //                    <li className="list-group-item"> Protein {item.protein}g</li>
    //                    <li className="list-group-item"> Carbs {item.carbs}g</li>
    //                    <li className="list-group-item"> Fat {item.fat}g</li>
    //                    </ul>
    //                   </ div>
    //           </div>
    //         ))
    //       }
    //     </div>
  
    //     <div></div><h4 style={{top : 25}} className="container d-flex justify-content-center">{props.breakfast} {props.lunch} {props.dinner}</h4>
    //   </div>
    // );
}

FoodView.propTypes = {
  allFood: PropTypes.array.isRequired,
};

export default FoodView;
// FoodView.propTypes = {
//   meal: PropTypes.array.isRequired,
// };


// export default reduxForm({
//   form : "mealInfo",
//   destroyOnUnmount : false
// })(FoodView)


/*********************************ORIGINAL***********************************/
// import React from "react";
// // import './styles/FoodView.css';
// import PropTypes from "prop-types";

// const FoodView = (props) => {
//   return (
//     <div className="meal-plan">
//       {/* <h1>{meal.name}</h1> */}
//     </div>
//   );
// };

// // FoodView.propTypes = {
// //   meal: PropTypes.array.isRequired,
// // };

// export default FoodView;