export interface IMovie {
  id: number;
  name: string;
  summary: string;
  image: {
    original: string;
    medium: string;
  };
  premiered: string;
  rating: { average: number };
  genres: string[];
}
