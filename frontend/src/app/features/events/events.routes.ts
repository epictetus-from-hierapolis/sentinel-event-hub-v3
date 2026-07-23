import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/events-list-page/events-list-page.component')
            .then((m) => m.EventsListPageComponent)
    },
    {
        path: ':id',
        loadComponent: () => import('./pages/event-details-page/event-details-page.component')
            .then((m) => m.EventDetailsPageComponent)
    },
];