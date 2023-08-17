import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesResComponent } from './mensajes-res.component';

describe('MensajesResComponent', () => {
  let component: MensajesResComponent;
  let fixture: ComponentFixture<MensajesResComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajesResComponent]
    });
    fixture = TestBed.createComponent(MensajesResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
