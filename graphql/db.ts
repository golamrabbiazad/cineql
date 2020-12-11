import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const ALL_MOVIES = `${BASE_URL}list_movies.json`;
const MOVIE_WITH_DETAILS = `${BASE_URL}movie_details.json`;
const MOVIE_WITH_SUGGESTION = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit: number, rating: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(ALL_MOVIES, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id: number) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_WITH_DETAILS, {
    params: {
      movie_id: id,
    },
  });

  return movie;
};

export const getSuggestion = async (id: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_WITH_SUGGESTION, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
