import { Injectable } from '@angular/core';
import { Hero } from './_interfaces/hero'
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';
import { MessageService } from './_services/message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {



  getHeroes(): Observable<Hero[]>{
    
    const heroes = of(HEROES);
    this.messageService.add('HerrooService: fetch heroes')
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
