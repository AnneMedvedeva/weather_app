/*SEARCH WEATHER BY CITY MODULE*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "./FetchWeather";

@connect((store) => {
  return {
    status: store.FetchWeather.status
  }
})
export default class Search extends Component {

  _searchCity = () => {
    const city = this.__cityInput.value;
    city.length !== 0 ? this.props.dispatch(fetchData(city)) : null;
  }

  _action = e => {e.key !== "Enter" ? null: this._searchCity()}

  render() {

    const { city, status } = this.props;
    const wrapperClass = (status === "failed") ? "search-block error-search" : "search-block";

    return (
      <div className={wrapperClass}>

        <section className="main">
          <div>
            <input
              type="text"
              className="city-input"
              id="city-name"
              ref={input => {
                this.__cityInput = input;
                return this.__cityInput;
              }}
              onKeyPress={this._action}
              placeholder={city}
            />
            <input
              type="button"
              value="&#128270;"
              className="search"
              onClick={this._searchCity}
              id="change-city-btn"
            />
          </div>
        </section>
        <span className="error-msg">Please enter valid city name!</span>
      </div>
    );
  }
}
