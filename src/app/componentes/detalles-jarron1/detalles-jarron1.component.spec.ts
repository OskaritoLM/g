import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJarron1Component } from './detalles-jarron1.component';

describe('DetallesJarron1Component', () => {
  let component: DetallesJarron1Component;
  let fixture: ComponentFixture<DetallesJarron1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesJarron1Component]
    });
    fixture = TestBed.createComponent(DetallesJarron1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
