import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES_DATA } from './heroes-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES_DATA);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES_DATA.find(hero => hero.id === id)!;
    return of(hero);
  }
}
