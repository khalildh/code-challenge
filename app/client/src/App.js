import React, { Component } from 'react';
import logo from './logo.svg';
import APIManager from './APIManager';
import {connect} from 'react-redux';
import RestaurantList from './RestaurantList';

import './App.css';

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  getCurrentLocation: (payload) =>
    dispatch({type: "ADD_CURRENT_LOCATION", payload}),
  listRestaurants: (payload) =>
    dispatch({type: "ADD_RESTAURANTS", payload})
})


class App extends Component {

  componentWillMount(props) {
    console.log(props);
  }

  componentWillMount() {

    navigator.geolocation.getCurrentPosition((pos) => {
      let latitude  = pos.coords.latitude;
      let longitude = pos.coords.longitude;
      let url = `cities?lat=${latitude}&lon=${longitude}`;
      this.props.getCurrentLocation(APIManager.Zomato.search(url));
    })

    // this.props.currentLocation ? console.log('yeah') : console.log('no');





  }


  render() {
    let {
      currentLocation,
      loading,
      restaurants
    } = this.props.common;

    currentLocation && !restaurants ?
      this.props.listRestaurants(APIManager.Zomato.search(`search?entity_id=${currentLocation.id}`)) :
      null
    return (
      <div>
      {
        loading ? (
          <p> Loading... </p>
        ) :
        <RestaurantList restaurants={this.props.common.restaurants}/>
      }
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
