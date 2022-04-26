import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/modules/layout/layout.module').then(m => m.LayoutModule),
  },
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
