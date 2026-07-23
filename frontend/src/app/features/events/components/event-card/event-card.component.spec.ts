import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';
import { Event } from '../../models/event.model';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;
  const event: Event = {
    id: 'event-1',
    cameraId: 'camera-1',
    cameraName: 'Front Gate',
    type: 'person',
    thumbnailPath: '/assets/thumb.jpg',
    videoPath: '/assets/video.mp4',
    isRead: false,
    timestamp: new Date('2026-07-23T10:30:00Z'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('event', event);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
