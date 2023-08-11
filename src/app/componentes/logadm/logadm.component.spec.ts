import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogadmComponent } from './logadm.component';

describe('LogadmComponent', () => {
  let component: LogadmComponent;
  let fixture: ComponentFixture<LogadmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogadmComponent]
    });
    fixture = TestBed.createComponent(LogadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
