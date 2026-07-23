import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge } from "@ionic/angular/standalone";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, DatePipe, IonBadge]
})
export class EventCardComponent implements OnInit {
  public readonly event = input.required<Event>();

  constructor() { }

  ngOnInit() { }

}
