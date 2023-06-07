import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/models';
import { HeroService } from '../shared/services';
import { HeroStore } from '../shared/stores';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private subscriptions = new Subscription();

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private heroStore: HeroStore) {}

  ngOnInit(): void {
    console.debug('[DEBUG-HEROES-COMPONENT] getHeroes');
    this.getHeroes();

    this.subscriptions.add(
      this.heroStore.state$.subscribe((state) => {
        console.debug('[DEBUG-HEROES-COMPONENT] state', state);
        this.heroes = state.heroes;
      })
    );
  }

  getHeroes(): void {
    this.heroService.loadHeroes().subscribe();
  }
}
