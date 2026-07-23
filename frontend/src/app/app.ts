import { Component, signal } from '@angular/core';
import { ApplicationShellComponent } from "./shell/application-shell/application-shell.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sentinel-event-hub');
}
