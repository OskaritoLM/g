import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiProductComponent } from './admi-product.component';

describe('AdmiProductComponent', () => {
  let component: AdmiProductComponent;
  let fixture: ComponentFixture<AdmiProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmiProductComponent]
    });
    fixture = TestBed.createComponent(AdmiProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
