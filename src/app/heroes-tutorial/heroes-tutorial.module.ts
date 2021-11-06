import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesTutorialRoutingModule } from './heroes-tutorial-routing.module';
import { HeroesTutorialComponent } from './heroes-tutorial.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroesTutorialComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesTutorialRoutingModule,
    FormsModule
  ] 
})
export class HeroesTutorialModule { }
