import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzulejosComponent } from './azulejos.component';

describe('AzulejosComponent', () => {
  let component: AzulejosComponent;
  let fixture: ComponentFixture<AzulejosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzulejosComponent]
    });
    fixture = TestBed.createComponent(AzulejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
