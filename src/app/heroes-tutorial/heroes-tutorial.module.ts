import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesTutorialRoutingModule } from './heroes-tutorial-routing.module';
import { HeroesTutorialComponent } from './heroes-tutorial.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    HeroesTutorialComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesTutorialRoutingModule
  ]
})
export class HeroesTutorialModule { }
