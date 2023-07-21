import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbasicComponent } from './navbasic.component';

describe('NavbasicComponent', () => {
  let component: NavbasicComponent;
  let fixture: ComponentFixture<NavbasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbasicComponent]
    });
    fixture = TestBed.createComponent(NavbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
