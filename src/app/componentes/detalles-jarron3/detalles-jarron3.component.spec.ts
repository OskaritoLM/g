import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJarron3Component } from './detalles-jarron3.component';

describe('DetallesJarron3Component', () => {
  let component: DetallesJarron3Component;
  let fixture: ComponentFixture<DetallesJarron3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesJarron3Component]
    });
    fixture = TestBed.createComponent(DetallesJarron3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
