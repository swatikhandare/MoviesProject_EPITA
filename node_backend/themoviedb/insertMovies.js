const movies = require('../moviesData.json');
const axios = require('axios');

axios({
  method: 'get',
  url: 'http://localhost:3001/api/movies/',
  headers: {},
})
  .then(function (response) {
    let movies = response.data.movies;
    movies.forEach((movie) => {
      console.log(movie._id);

      axios({
        method: 'put',
        url: `http://localhost:3001/api/movies/rating/updateMovieAverageRating/${movie._id}`,
        headers: {},
        data: '',
      })
        .then(function (response) {
          console.log(response.data.averageRating);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  })
  .catch(function (error) {
    console.log(error);
  });
