import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVajilla4Component } from './detalles-vajilla4.component';

describe('DetallesVajilla4Component', () => {
  let component: DetallesVajilla4Component;
  let fixture: ComponentFixture<DetallesVajilla4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesVajilla4Component]
    });
    fixture = TestBed.createComponent(DetallesVajilla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
