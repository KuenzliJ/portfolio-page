import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusszeileComponent } from './fusszeile.component';

describe('FusszeileComponent', () => {
  let component: FusszeileComponent;
  let fixture: ComponentFixture<FusszeileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FusszeileComponent]
    });
    fixture = TestBed.createComponent(FusszeileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
