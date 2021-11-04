import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesTutorialComponent } from './heroes-tutorial.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [{ path: '', component: HeroesTutorialComponent },
  {path:'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesTutorialRoutingModule { }
