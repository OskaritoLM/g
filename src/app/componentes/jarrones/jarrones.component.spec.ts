import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarronesComponent } from './jarrones.component';

describe('JarronesComponent', () => {
  let component: JarronesComponent;
  let fixture: ComponentFixture<JarronesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JarronesComponent]
    });
    fixture = TestBed.createComponent(JarronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
