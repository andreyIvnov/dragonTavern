import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-tutorial',
  templateUrl: './heroes-tutorial.component.html',
  styleUrls: ['./heroes-tutorial.component.css']
})
export class HeroesTutorialComponent implements OnInit {

  title = 'Tour of Heroes'
  constructor() { }

  ngOnInit(): void {
  }

}
