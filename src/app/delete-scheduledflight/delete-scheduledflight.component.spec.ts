import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteScheduledflightComponent } from './delete-scheduledflight.component';

describe('DeleteScheduledflightComponent', () => {
  let component: DeleteScheduledflightComponent;
  let fixture: ComponentFixture<DeleteScheduledflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteScheduledflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteScheduledflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
