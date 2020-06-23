import React, { Component } from "react";
import { connect } from "react-redux";
import { addFoodThunk, deleteFoodThunk } from "../../thunks";
import { FoodEntryView } from "../views";
import axios from "axios";

// Smart container;
class FoodEntryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: " ",
      hitSubmit: false,
      foodCardChoices : [],
      imageUrl : ''
    };
  }

  handleChange = (event) => {
    const query = event.target.value;
    console.log(query);
    this.setState({
      query: query,
      loading: true,
      message: " ",
      hitSubmit: false,
    });
  };
  handleSubmit = (event) => {
    this.setState({ hitSubmit: true });
    event.preventDefault();
    console.log(this.state.query);
    this.fetchSearchResults(this.state.query);
  };

  fetchSearchResults = (query) => {
    axios({
      method: "GET",
      url: `https://api.nutritionix.com/v1_1/search/${query}?results=0:5&fields=item_name,nf_calories,nf_total_fat,nf_total_carbohydrate,nf_protein&appId=47ba3427&appKey=ff4f65e31c60b9e93c984ea2821d82b9`,
    })
      .then((response) => {
        const responseFoods = response.data.hits;
        console.log(responseFoods);
        this.setState({
          results: responseFoods,
        });
        //console.log("logging results in state: " , this.state.results)
      })
      .catch((error) => {
        if (error) {
          this.setState({
            loading: false,
            message: "failed to fetch data",
          });
        }
      });

      axios({
        method: "GET",
        url: `https://api.pexels.com/v1/search?per_page=1&query=${query}`,
        headers: {
          'Authorization' : "563492ad6f917000010000019b78a0fd2fb54ba996f85c4bd9925796"
        }
      }).then((response)=>{
          const responseUrl = response.data.photos[0].src.original;
          console.log("THE RESPONSE --------------------", response);
          console.log("THE URL-------------", responseUrl)
          this.setState({
            imageUrl : responseUrl
          })
        })
  };
  renderSearchResults = () => {
    const results = this.state.results;
    console.log("logging from render: ", results);

    if (results.length) {
      console.log("logging from render: ", results);

      return (
        <>
        <img
        src={this.state.imageUrl}
        width="300px"
        />
        <div className="results-container">
          {results.map((result, key) => {
            let choice = key;
            let name = result.fields.item_name;
            let calories = Math.floor(result.fields.nf_calories);
            let fat = Math.floor(result.fields.nf_total_fat);
            let carbohydrates = Math.floor(result.fields.nf_total_carbohydrate);
            let protein = Math.floor(result.fields.nf_protein);
            this.state.foodCardChoices.push({
               name : result.fields.item_name,
               calories : Math.floor(result.fields.nf_calories),
               fat : Math.floor(result.fields.nf_total_fat),
               carbohydrates : Math.floor(result.fields.nf_total_carbohydrate),
               protein : Math.floor(result.fields.nf_protein),
               imageUrl : this.state.imageUrl
              })
            return (
              <a key={key}>
                <div id="individual-result" >
                  <p>{name}</p>
                  <p>{calories} kcal</p>
                  <p>{fat}g fat</p>
                  <p>{carbohydrates}g carbohydrates</p>
                  <p>{protein}g protein</p>
                  <button id="selectFood" type="select" value="select" onClick={() => this.selectFoodCard(key)}> select </button>
                </div>
              </a>
            );
          })}
        </div>
        </>
      );
    }
  };

  selectFoodCard = (key) => {
    console.log("[key] ", this.state.foodCardChoices[key])
    const toAdd = {
      name : this.state.foodCardChoices[key].name,
      calories : this.state.foodCardChoices[key].calories,
      fat : this.state.foodCardChoices[key].fat,
      carbs : this.state.foodCardChoices[key].carbohydrates,
      protein : this.state.foodCardChoices[key].protein,
      imageUrl : this.state.imageUrl,
      usernameId : this.props.username
    }
    console.log("toAdd ",toAdd);
    this.props.addFood(toAdd);
  }
  render(){
    return (
      <FoodEntryView
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        value={this.state.query}
        render = {this.renderSearchResults}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, "mapstate");
  return {
    allFood: state.food,
    username: state.user.username
  };
};

// // Map dispatch to props;
const mapDispatch = (dispatch, ownProps) => {
  return {
    addFood: (food) => dispatch(addFoodThunk(food, ownProps)),
    deleteFood: (id) => dispatch(deleteFoodThunk(id)),
  };
};

export default connect(mapStateToProps, mapDispatch)(FoodEntryContainer);