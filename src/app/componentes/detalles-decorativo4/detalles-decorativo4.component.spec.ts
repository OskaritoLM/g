import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDecorativo4Component } from './detalles-decorativo4.component';

describe('DetallesDecorativo4Component', () => {
  let component: DetallesDecorativo4Component;
  let fixture: ComponentFixture<DetallesDecorativo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesDecorativo4Component]
    });
    fixture = TestBed.createComponent(DetallesDecorativo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
