import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list-page',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsListPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
