import { getMovies, getMovie, getSuggestion } from "./db";

const resolvers = {
  Query: {
    movies: (_: any, { rating, limit }: any) => getMovies(limit, rating),
    movie: (_: any, { id }: any) => getMovie(id),
    suggestion: (_: any, { id }: any) => getSuggestion(id),
  },
};

export default resolvers;
