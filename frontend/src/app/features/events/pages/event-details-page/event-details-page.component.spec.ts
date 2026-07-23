import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventDetailsPageComponent } from './event-details-page.component';

describe('EventDetailsPageComponent', () => {
  let component: EventDetailsPageComponent;
  let fixture: ComponentFixture<EventDetailsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EventDetailsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
