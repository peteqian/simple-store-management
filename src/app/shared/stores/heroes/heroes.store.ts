import { Injectable } from '@angular/core';

import { Store } from '../store';
import { Hero, HeroState, initialHeroState } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HeroStore extends Store<HeroState> {
  constructor() {
    super(initialHeroState);
  }

  public setHeroes(heroes: Hero[]): void {
    this.setState((state) => ({ ...state, heroes }));
  }

  public get heroes(): Hero[] {
    return this.state.heroes;
  }
}
