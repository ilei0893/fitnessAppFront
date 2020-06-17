import React from "react";
// import './styles/MealPlanView.css';
import { reduxForm, Field } from "redux-form"
import PropTypes from "prop-types";

function MealPlanView (props) {
    const { handleSubmit} = props
    return (
      <div className="meal-plan">
        <div className="container col-4">
            <h2>Meals</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
              {/* <label htmlFor="breakfast">Breakfast</label> */}
                <Field name="breakfast" component="input" type="text" className="form-control form-control-md" placeholder="Meal" name="meal"/>
              </div>
              {/* <div className="form-group">
              <label htmlFor="lunch">Lunch</label>
                <Field name="lunch" component="input" type="text" className="form-control" placeholder="Lunch" name="lunch"/>
              </div>
              <div className="form-group">
              <label htmlFor="dinner">Dinner</label>
                <Field name="dinner" component="input" type="text" className="form-control form-control-md" placeholder="Dinner" name="dinner"/>
              </div> */}
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
        <div className="container row ">
          {
            props.meal.map( (item,index) => (
              <div style={{top : 20 }} key={index} className="col-4 text-center d-flex justify-content-center">
                    < div className="col-6">
                      <h3>{item.name}</h3>
                       <ul className="list-group">
                       <li className="list-group-item"> Calories {item.calories}</li>
                       <li className="list-group-item"> Protein {item.protein}g</li>
                       <li className="list-group-item"> Carbs {item.carbs}g</li>
                       <li className="list-group-item"> Fat {item.fat}g</li>
                       </ul>
                      </ div>
              </div>
            ))
          }
        </div>
  
        <div></div><h4 style={{top : 25}} className="container d-flex justify-content-center">{props.breakfast} {props.lunch} {props.dinner}</h4>
      </div>
    );
}

// MealPlanView.propTypes = {
//   meal: PropTypes.array.isRequired,
// };

export default reduxForm({
  form : "mealInfo",
  destroyOnUnmount : false
})(MealPlanView)



/*********************************ORIGINAL***********************************/
// import React from "react";
// // import './styles/MealPlanView.css';
// import PropTypes from "prop-types";

// const MealPlanView = (props) => {
//   return (
//     <div className="meal-plan">
//       {/* <h1>{meal.name}</h1> */}
//     </div>
//   );
// };

// // MealPlanView.propTypes = {
// //   meal: PropTypes.array.isRequired,
// // };

// export default MealPlanView;