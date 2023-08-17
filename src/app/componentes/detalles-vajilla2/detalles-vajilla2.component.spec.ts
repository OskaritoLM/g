import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVajilla2Component } from './detalles-vajilla2.component';

describe('DetallesVajilla2Component', () => {
  let component: DetallesVajilla2Component;
  let fixture: ComponentFixture<DetallesVajilla2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesVajilla2Component]
    });
    fixture = TestBed.createComponent(DetallesVajilla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
