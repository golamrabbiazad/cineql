import { getMovies, getMovie, getSuggestion } from "./db";

const resolvers = {
  Query: {
    movies: (_: any, { rating, limit }: { rating: number; limit: number }) =>
      getMovies(limit, rating),
    movie: (_: any, { id }: { id: number }) => getMovie(id),
    suggestion: (_: any, { id }: { id: number }) => getSuggestion(id),
  },
};

export default resolvers;
