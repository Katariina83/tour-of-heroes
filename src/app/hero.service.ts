//The HeroService could get hero data from ANYWHERE such as a web service, local storage, or a mock data source.

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root', //provide the service at the root level, so Angular creates a single, shared instance of HeroService and injects into any class that asks for it. 
})
export class HeroService {

  constructor(private messageService: MessageService) { }  //Angular injects the singleton MessageService into that property when it creates the HeroService.

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}