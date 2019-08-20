import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginDefaultComponent } from './components/app-login-default/app-login-default.component';

const routes: Routes = [
  {
    path: '',
    component: AppLoginDefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLoginRoutingModule { }
