import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/modules/layout/layout.module').then(m => m.LayoutModule),
  },
  { path: 'playground', loadChildren: () => import('./features/playground/playground.module').then(m => m.PlaygroundModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        scrollPositionRestoration: 'enabled',
        useHash: true,
      },
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
