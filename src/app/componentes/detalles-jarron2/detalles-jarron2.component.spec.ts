import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJarron2Component } from './detalles-jarron2.component';

describe('DetallesJarron2Component', () => {
  let component: DetallesJarron2Component;
  let fixture: ComponentFixture<DetallesJarron2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesJarron2Component]
    });
    fixture = TestBed.createComponent(DetallesJarron2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
