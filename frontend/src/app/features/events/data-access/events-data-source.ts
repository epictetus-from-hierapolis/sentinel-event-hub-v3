import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { events as mockEvents } from "./mock-events.data";
import { Event } from "../models/event.model";

@Injectable({
    providedIn: "root"
})
export class EventsDataSource {
    public getEvents(): Observable<Event[]> {
        return of(mockEvents);
    }
}