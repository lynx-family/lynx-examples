export interface Poster {
  poster: string;
  name: string;
  score: number;
  comments: number;
  scale: number;
}

import item_0 from "@assets/item_0.jpg";
import item_1 from "@assets/item_1.jpg";
import item_2 from "@assets/item_2.jpg";
import item_3 from "@assets/item_3.jpg";
import item_4 from "@assets/item_4.jpg";

export const posterImgs: Poster[] = [
  {
    poster: item_0,
    name: "Joker",
    score: 8.7,
    comments: 1085882,
    scale: 1.5,
  },
  {
    poster: item_1,
    name: "The Silence of the Lambs",
    score: 8.8,
    comments: 965026,
    scale: 1.475,
  },
  {
    poster: item_2,
    name: "Lady Bird",
    score: 7.9,
    comments: 342618,
    scale: 1.43,
  },
  {
    poster: item_3,
    name: "Parasite",
    score: 8.8,
    comments: 1473702,
    scale: 1.42,
  },
  {
    poster: item_4,
    name: "The Social Network",
    score: 8.2,
    comments: 483079,
    scale: 1.48,
  },
];
