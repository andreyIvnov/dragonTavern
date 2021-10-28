import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitHubUsersRoutingModule } from './git-hub-users-routing.module';
import { GitHubUsersComponent } from './git-hub-users.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    GitHubUsersComponent
  ],
  imports: [
    CommonModule,
    GitHubUsersRoutingModule,
    MatCardModule
  ]
})
export class GitHubUsersModule { }
