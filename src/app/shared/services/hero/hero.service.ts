import { Injectable } from '@angular/core';

import { Observable, map, of } from 'rxjs';

import { Hero } from '../../models/hero/hero';
import { HEROES } from '../../models/hero/mock-heroes';
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
        this.heroStore.setHeroes(heroes);
      })
    );
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
