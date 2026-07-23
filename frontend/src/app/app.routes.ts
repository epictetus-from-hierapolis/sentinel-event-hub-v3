import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shell/application-shell/application-shell.component')
            .then((m) => m.ApplicationShellComponent),
        children: [
            {
                path: 'events',
                loadChildren: () => import('./features/events/events.routes').then(m => m.routes)
            }
        ]

    }
];
