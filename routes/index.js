var express = require('express')
var router = express.Router()
var axios = require('axios')

const API_KEY = '735cb91bc35fe599f61a9989445554ca'  // I would usually hide in Enviroment variable
const API_URL = "https://developers.zomato.com/api/v2.1" // Base url of api

const queryObj = { // what's really a query is label a params in axios....... queries (?name=me&sort=cost) vs. params (www.google.com/:hey/:id )
  entity_id: 280, //id for nyc
  entity_type: 'city',
  cuisines: 308,  //vegietarian cuisines
  sort: 'rating',
  order: 'desc',
}

/* A general function that makes an api call (zomato api) and returns a promise */
const getAPI = async (path, params = {params: queryObj}, baseUrl = API_URL) => {
  const APIKeyRequestHeader = { }
  const fullPath = baseUrl + path
  APIKeyRequestHeader['user-key'] = API_KEY

  return await axios.get(fullPath, {...params, headers: APIKeyRequestHeader} )
}

/* GET home page then redirect */
router.get('/', (req, res, next) => {
  res.redirect('/listings')
});

/* GET listings of first 20 results of vegietarian cuisines in nyc */
 router.get('/listings', (req, res, next) => {
  getAPI('/search')
  .then(response => {
    let { restaurants } = response.data
    //console.log(response)
    res.render('index', { title: 'Veggie NYC', restaurants: restaurants })
  })
  .catch((e) => {
    console.log(e)
    res.render('index', { title: 'Error' })
  })              
})

/* GET the reviews of each restuarant*/
router.get('/restuarant/:id/reviews', (req, res, next) => {
  const { id } = req.params

  getAPI('/reviews',{ params: {...queryObj, res_id: id}})
  .then(response => {
    let { user_reviews } = response.data

    res.render('reviews', { reviews: user_reviews })
  })
  .catch(error => {
    console.log(error);
    res.render('index', { title: 'Error' })
  });
})

module.exports = router;
