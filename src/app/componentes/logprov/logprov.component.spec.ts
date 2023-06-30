import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogprovComponent } from './logprov.component';

describe('LogprovComponent', () => {
  let component: LogprovComponent;
  let fixture: ComponentFixture<LogprovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogprovComponent]
    });
    fixture = TestBed.createComponent(LogprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
