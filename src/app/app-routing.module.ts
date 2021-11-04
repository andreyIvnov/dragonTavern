import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GitHubUsersGuard } from './_helpers/github-users-guard';

const routes: Routes = [
  {path:"about", component: AboutComponent},
  {path:"login",component:LoginComponent},
  {path:'home', component:HomeComponent},
  { path: 'gitHubUsers', loadChildren: () => import('./git-hub-users/git-hub-users.module').then(m => m.GitHubUsersModule),
    canActivate:[GitHubUsersGuard]
  },
  { path: 'heroesTutorial', loadChildren: () => import('./heroes-tutorial/heroes-tutorial.module').then(m => m.HeroesTutorialModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GitHubUsersGuard]
})
export class AppRoutingModule { }
