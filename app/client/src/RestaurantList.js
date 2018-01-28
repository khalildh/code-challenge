import React, { Component } from 'react';
import propTypes from 'prop-types';
import Restaurant from './Restaurant';
import './RestaurantList.css';

class RestaurantList extends Component {
  render() {
    const restaurants = this.props.restaurants.map((r, index) => (
      <Restaurant key={r.restaurant.id} {...r.restaurant} />
    ))
    return (
      <div className="restaurant-list">
        {restaurants}
      </div>
    )
  }
}

RestaurantList.propTypes = {
  restaurants: propTypes.arrayOf(propTypes.object).isRequired,
}

export default RestaurantList;
