import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VajillasComponent } from './vajillas.component';

describe('VajillasComponent', () => {
  let component: VajillasComponent;
  let fixture: ComponentFixture<VajillasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VajillasComponent]
    });
    fixture = TestBed.createComponent(VajillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
