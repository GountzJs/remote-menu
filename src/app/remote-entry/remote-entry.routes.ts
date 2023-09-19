import { Route } from '@angular/router';

export const remoteEntryRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../header/header.component').then((m) => m.HeaderComponent),
  },
];
