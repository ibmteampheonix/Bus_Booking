import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatesComponent } from './seates.component';

describe('SeatesComponent', () => {
  let component: SeatesComponent;
  let fixture: ComponentFixture<SeatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
