/*MAIN MODULE*/
import React, { Component } from "react";
import { connect } from "react-redux";

import WeatherBlock from "./WeatherBlock";
import Search from "./Search";

const WeatherForecast = ({ data }) => {

    const { city, list } = data;
    const { name } = city;
  
    return (
      <div className="main-weather-block">
        <Search city={name} />
        <WeatherBlock forecasts={list} />
      </div>
    );
};

export default WeatherForecast;