import React from "react";
// import './styles/MealPlanView.css';
import PropTypes from "prop-types";

const MealPlanView = (props) => {
  return (
    <div className="meal-plan">
      {/* <h1>{meal.name}</h1> */}
    </div>
  );
};

MealPlanView.propTypes = {
  meal: PropTypes.array.isRequired,
};

export default MealPlanView;
