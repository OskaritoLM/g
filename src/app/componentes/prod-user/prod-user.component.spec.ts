import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdUserComponent } from './prod-user.component';

describe('ProdUserComponent', () => {
  let component: ProdUserComponent;
  let fixture: ComponentFixture<ProdUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdUserComponent]
    });
    fixture = TestBed.createComponent(ProdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
