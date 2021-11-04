import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTutorialComponent } from './heroes-tutorial.component';

describe('HeroesTutorialComponent', () => {
  let component: HeroesTutorialComponent;
  let fixture: ComponentFixture<HeroesTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
