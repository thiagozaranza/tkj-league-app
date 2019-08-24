import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsIndexComponent } from './teams-index.component';

describe('TeamsIndexComponent', () => {
  let component: TeamsIndexComponent;
  let fixture: ComponentFixture<TeamsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
