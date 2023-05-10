import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LOGIN } from './core/constants/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: LOGIN,
    pathMatch: 'full',
  },
  {
    path: LOGIN,
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class JrRoutingModule {}
