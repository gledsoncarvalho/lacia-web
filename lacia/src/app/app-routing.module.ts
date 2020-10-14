import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  {
    path: 'main', loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
