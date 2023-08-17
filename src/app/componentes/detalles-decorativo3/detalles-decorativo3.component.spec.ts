import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDecorativo3Component } from './detalles-decorativo3.component';

describe('DetallesDecorativo3Component', () => {
  let component: DetallesDecorativo3Component;
  let fixture: ComponentFixture<DetallesDecorativo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesDecorativo3Component]
    });
    fixture = TestBed.createComponent(DetallesDecorativo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
