import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginRoutingModule } from './app-login-routing.module';
import { AppLoginDefaultComponent } from './components/app-login-default/app-login-default.component';

@NgModule({
  declarations: [AppLoginDefaultComponent],
  imports: [
    CommonModule,
    AppLoginRoutingModule
  ]
})
export class AppLoginModule { }
