import { Movie, Actor } from './types';

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Batman',
    description: 'asd',
    duration: 120,
    image: 'https://cdn.mos.cms.futurecdn.net/y2FXvdPpK8WBj79PivRUgk.jpg',
  },
  {
    id: 2,
    title: 'Spiderman',
    description: 'asd',
    duration: 90,
    image: 'https://cdn.mos.cms.futurecdn.net/y2FXvdPpK8WBj79PivRUgk.jpg',
  },
  {
    id: 3,
    title: 'Robin',
    description: 'asd',
    duration: 120,
    image: 'https://cdn.mos.cms.futurecdn.net/y2FXvdPpK8WBj79PivRUgk.jpg',
  },
];

export const actors: Actor[] = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg',
    name: 'Christopher',
    lastName: 'Hemsworth',
    old: 38
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/87px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg',
    name: 'Scarlett',
    lastName: 'Johansson',
    old: 37
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chris_Pratt_2018.jpg/220px-Chris_Pratt_2018.jpg',
    name: 'Christopher',
    lastName: 'Pratt',
    old: 42
  }
]