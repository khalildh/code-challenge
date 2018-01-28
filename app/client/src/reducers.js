import { combineReducers } from 'redux';

const defaultState = {
  appName: 'FoodMeNow',
  loading: true,
}

const common = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_RESTAURANTS":
      return {
        ...state,
        loading: false,
        restaurants: JSON.parse(action.payload).restaurants
      }
    case "ADD_CURRENT_LOCATION":
      return {
        ...state,
        currentLocation: JSON.parse(action.payload).location_suggestions[0]
      }
    default:
      return {
        ...state
      };
  }
}

export default combineReducers({
  common
});
