import { Hero } from './hero';

export interface HeroState {
  heroes: Hero[];
}

export const initialHeroState: HeroState = {
  heroes: []
};
