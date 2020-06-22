import React from "react";

const FoodEntryView = (props) => {
    console.log(props)
  return (
    <div>
      <form id="form" onSubmit={props.onSubmit}>
        <label className="search-label" htmlFor="search-input">
          <p id="prompt">enter a food:</p>
          <input
            id="search-input"
            type="text"
            name="query"
            value={props.value}
            placeholder="food"
            onChange={props.onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {props.render()}
    </div>
  );
};

export default FoodEntryView;
