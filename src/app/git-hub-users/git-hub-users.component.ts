import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_modules/user';

import { GitHubUsersService } from '../_services/github-users.service';

@Component({
  selector: 'app-git-hub-users',
  templateUrl: './git-hub-users.component.html',
  styleUrls: ['./git-hub-users.component.css']
})
export class GitHubUsersComponent implements OnInit {

  users: User[];


  constructor(private http: HttpClient, private gitHubUsersService: GitHubUsersService) { }

  ngOnInit(): void {
    this.getGitHubUsers()
  }

  getGitHubUsers()
  {
    this.gitHubUsersService.getData().subscribe((data)=>
    {
      console.log(data);
      this.users = data
    })
  }
}
