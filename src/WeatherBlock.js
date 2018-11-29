/*MAIN WEATHER INFO MODULE*/
import React, { Component } from "react";

export default class WeatherBlock extends Component {
  _day = data => {
    const Week = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"];
    return Week[new Date(data[0].dt * 1000).getDay()];
  };


  _image = (data) => {
    return (
      <div className="icon">
        <img src={`https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`}/>
      </div>);
  };

  _elements = data => {
    return (data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0, 10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);

      return list;}, {}));
  };

  _info = (data, min_temp=[], max_temp=[]) => {
    data.map(item => {
      max_temp.push(item.main.temp_max);
      min_temp.push(item.main.temp_min);
    });

    return (
      <div className="info-block">
        <div className="temp">
          <strong>&#8593; {`${Math.round(Math.max(...max_temp))}`} °C</strong> <br/> &#8595; 
          {`${Math.round(Math.min(...min_temp))}`} °C
        </div>
        <div className="pressure">
          {`Pressure: ${data[0].main.pressure} hpa`}
        </div>
      </div>
    );
  };

  render() {

    const { forecasts } = this.props;
    const elements = Object.values(this._elements(forecasts));
    const weatherBlocks = elements.slice(0, 3);

    return (
      <div className="weather-info-blocks">
        {weatherBlocks.map((item, i) => (
          <div className="forecast-tile">
          <div className="days-of-week">
          {this._day(item)}</div>
            <div className="main-info">
                {this._image(item)}
                {this._info(item)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
