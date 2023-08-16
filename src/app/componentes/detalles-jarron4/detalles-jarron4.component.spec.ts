import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJarron4Component } from './detalles-jarron4.component';

describe('DetallesJarron4Component', () => {
  let component: DetallesJarron4Component;
  let fixture: ComponentFixture<DetallesJarron4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesJarron4Component]
    });
    fixture = TestBed.createComponent(DetallesJarron4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
