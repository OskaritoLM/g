import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVajilla3Component } from './detalles-vajilla3.component';

describe('DetallesVajilla3Component', () => {
  let component: DetallesVajilla3Component;
  let fixture: ComponentFixture<DetallesVajilla3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesVajilla3Component]
    });
    fixture = TestBed.createComponent(DetallesVajilla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
