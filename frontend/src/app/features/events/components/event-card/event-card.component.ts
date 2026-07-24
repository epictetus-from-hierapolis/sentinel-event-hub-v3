import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Event } from '../../models/event.model';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonRow,
    DatePipe,
  ],
})
export class EventCardComponent {
  public readonly event = input.required<Event>();
}
