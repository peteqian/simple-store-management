import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HEROES, Hero } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HeroApiConnector {
  // mock API call
  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<Hero[]> {
    const mockHeroes = HEROES;

    return of(mockHeroes);
  }

  public getHero(id: number): Observable<Hero | undefined> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const mockHero = HEROES.find((h) => h.id === id)!;

    return of(mockHero);
  }
}
