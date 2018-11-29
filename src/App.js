/*STARTING POINT MODULE*/
import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchData } from "./FetchWeather";

import MainBlock from './MainBlock';


@connect(store => {  
  return {
    forecast: store.FetchWeather.data
  }
})


export default class App extends Component {

  componentDidMount() {  
    this.props.dispatch(fetchData("kiev"));
  }


  render() {
    const { forecast } = this.props;

    return (
      forecast != null ? (
      <div>
        <MainBlock data={forecast} />
      </div>
      ) : (<div/>)
    );
  }
}