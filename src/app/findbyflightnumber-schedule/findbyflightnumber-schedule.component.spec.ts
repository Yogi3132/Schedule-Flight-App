import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyflightnumberScheduleComponent } from './findbyflightnumber-schedule.component';

describe('FindbyflightnumberScheduleComponent', () => {
  let component: FindbyflightnumberScheduleComponent;
  let fixture: ComponentFixture<FindbyflightnumberScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyflightnumberScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyflightnumberScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
