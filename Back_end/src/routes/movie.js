const router = require("express").Router();
const movieController = require("../Controller/controller");


router.get("/movies", movieController.getAllMovies);

// const movies = require("../config/movie.json");

// const insertMovies = async () => {
//     try {
//         const docs = await Movie.insertMany(movies);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertMovies()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

module.exports = router;
