import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationsbarComponent } from './navigationsbar.component';

describe('NavigationsbarComponent', () => {
  let component: NavigationsbarComponent;
  let fixture: ComponentFixture<NavigationsbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationsbarComponent]
    });
    fixture = TestBed.createComponent(NavigationsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
