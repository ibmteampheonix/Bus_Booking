import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBusesComponent } from './show-buses.component';

describe('ShowBusesComponent', () => {
  let component: ShowBusesComponent;
  let fixture: ComponentFixture<ShowBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
