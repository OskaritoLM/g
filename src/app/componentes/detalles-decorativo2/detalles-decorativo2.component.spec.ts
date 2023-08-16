import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDecorativo2Component } from './detalles-decorativo2.component';

describe('DetallesDecorativo2Component', () => {
  let component: DetallesDecorativo2Component;
  let fixture: ComponentFixture<DetallesDecorativo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesDecorativo2Component]
    });
    fixture = TestBed.createComponent(DetallesDecorativo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
