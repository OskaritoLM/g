import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDecorativo1Component } from './detalles-decorativo1.component';

describe('DetallesDecorativo1Component', () => {
  let component: DetallesDecorativo1Component;
  let fixture: ComponentFixture<DetallesDecorativo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesDecorativo1Component]
    });
    fixture = TestBed.createComponent(DetallesDecorativo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
