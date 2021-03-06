import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../_interfaces/hero';
// import { Hero } from '../_interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = []
  selectedHero!: Hero
  // hero : Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero):void 
  {
    this.selectedHero = hero
  }
}
