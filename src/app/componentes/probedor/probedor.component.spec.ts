import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbedorComponent } from './probedor.component';

describe('ProbedorComponent', () => {
  let component: ProbedorComponent;
  let fixture: ComponentFixture<ProbedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbedorComponent]
    });
    fixture = TestBed.createComponent(ProbedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
