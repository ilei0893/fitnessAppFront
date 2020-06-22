import React, { Component } from "react";
import { connect } from "react-redux";
import { showFoodThunk, deleteFoodThunk } from "../../thunks";
import { FoodEntryView } from "../views";
import axios from 'axios';
// Smart container;
export default class FoodEntryContainer extends Component {
  constructor(props){
      super(props);
      this.state={
        query: '',
        results: {},
        loading:false,
        message: ' ',
        hitSubmit : false
    }
  }

  handleChange = (event) =>{
    const query = event.target.value;
    this.setState({
        query : query,
        loading : true,
        message : ' ',
        hitSubmit : false
    })
}
handleSubmit = (event) =>{
    this.setState({hitSubmit : true});
    event.preventDefault();
    this.fetchSearchResults(this.state.query);
  }
fetchSearchResults = (query) => {
    axios({
        "method":"GET",
        "url":`https://api.nutritionix.com/v1_1/search/${query}?results=0:5&fields=item_name,nf_calories,nf_total_fat,nf_total_carbohydrate,nf_protein&appId=47ba3427&appKey=ff4f65e31c60b9e93c984ea2821d82b9`,
        
        })
        .then((response)=>{
            const responseFoods = response.data.hits;
            console.log(responseFoods)
            this.setState({
                results : responseFoods
            })
            //console.log("logging results in state: " , this.state.results)
          })
        .catch( error => {
            if(error){
                this.setState({
                loading:false,
                message:'failed to fetch data'
                })
            }
        })
}
renderSearchResults = () => {
    const results = this.state.results;
    console.log("logging from render: " , results);

    if(results.length){
        console.log("logging from render: " , results);
        return(
            <div className="results-container">
                {results.map(result => {
                    return(
                        <a key={result}>
                            <div id="individual-result">
                                <p>{result.fields.item_name}</p>
                                <p>{result.fields.nf_calories}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
        )
    }
};
  render(){
      return(
        <div>
            <form id="form" onSubmit={this.handleSubmit}>
                <label className="search-label" htmlFor="search-input">
                    <p id="prompt">enter a food:</p>
                    <input 
                        id="search-input" 
                        type="text" 
                        name="query" 
                        value = {this.state.query}
                        placeholder="food"
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {this.renderSearchResults()}
        </div>
      )
  }
}