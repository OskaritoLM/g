import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVajilla1Component } from './detalles-vajilla1.component';

describe('DetallesVajilla1Component', () => {
  let component: DetallesVajilla1Component;
  let fixture: ComponentFixture<DetallesVajilla1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesVajilla1Component]
    });
    fixture = TestBed.createComponent(DetallesVajilla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
