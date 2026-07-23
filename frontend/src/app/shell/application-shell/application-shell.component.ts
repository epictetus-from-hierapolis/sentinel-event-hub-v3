import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-application-shell',
  templateUrl: './application-shell.component.html',
  styleUrls: ['./application-shell.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet]
})
export class ApplicationShellComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
