import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Hero } from '../../models/hero/hero';
import { MessageService } from '../message/message.service';
import { HeroApiConnector } from '../../api';
import { HeroStore } from '../../stores/heroes/heroes.store';

@Injectable({ providedIn: 'root' })
export class HeroService {
  constructor(
    private heroApiConnector: HeroApiConnector,
    private heroStore: HeroStore,
    private messageService: MessageService
  ) {}

  loadHeroes(): Observable<Hero[] | void> {
    return this.heroApiConnector.getHeroes().pipe(
      map((heroes) => {
        this.messageService.add('HeroService: fetched heroes');
        this.heroStore.setHeroes(heroes);
      })
    );
  }

  loadHero(id: number): Observable<Hero | undefined> {
    // We could add a condition to check if hero list is already populated but this
    // removes the "responsiveness" characteristic of the application.
    return this.heroApiConnector.getHero(id).pipe(
      map((hero) => {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return hero;
      })
    );
  }
}
