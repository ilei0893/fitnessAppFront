import React from "react";
import './styles/foodSearch.css';

const FoodEntryView = (props) => {
    // console.log(props)
  return (
    <div className="searchdiv">
      <form id="form" onSubmit={props.onSubmit}>
        <label className="search-label" htmlFor="search-input">
          <input
            id="search-input"
            type="text"
            name="query"
            value={props.value}
            placeholder="What did you eat?"
            onChange={props.onChange}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
      {props.render()}
    </div>
  );
};

export default FoodEntryView;
