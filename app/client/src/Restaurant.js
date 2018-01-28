import React, { Component } from 'react';
import './Restaurant.css';

class Restaurant extends Component {
  render(){
    const {name, featured_image} = this.props;
    console.log(this.props);
    console.log(name);
    console.log(featured_image);
    return (
      <div className="restaurant-card">
        <div className="restaurant-card-img">
          <img src={featured_image} alt={name} />
        </div>
        <div className="restaurant-card-content">
          <h3 className="restaurant-card-title">{name}</h3>
        </div>
      </div>
    )
  }
}

export default Restaurant;
