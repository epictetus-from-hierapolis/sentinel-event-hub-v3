import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { EventsDataSource } from '../../data-access/events-data-source';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventCardComponent } from "../../components/event-card/event-card.component";


@Component({
  selector: 'app-events-list-page',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EventCardComponent]
})
export class EventsListPageComponent implements OnInit {
  private readonly eventsDataSource = inject(EventsDataSource);

  protected readonly events = toSignal(
    this.eventsDataSource.getEvents(),
    { initialValue: [] }
  );

  constructor() { }

  ngOnInit() { }

}
