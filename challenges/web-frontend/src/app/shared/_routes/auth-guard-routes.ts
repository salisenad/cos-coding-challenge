import { Routes } from '@angular/router';

export const AuthGuardRoutes: Routes = [
  {
    path: 'overview',
    loadChildren: () => import('src/app/components/overview.module').then(m => m.OverviewModule)
  }
];
