import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventsDataSource } from '../../data-access/events-data-source';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-events-list-page',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EventCardComponent, IonContent],
})
export class EventsListPageComponent {
  private readonly eventsDataSource = inject(EventsDataSource);

  protected readonly events = toSignal(this.eventsDataSource.getEvents(), { initialValue: [] });
}
