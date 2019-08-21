import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginRoutingModule } from './app-login-routing.module';
import { AppLoginDefaultComponent } from './components/app-login-default/app-login-default.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { AppRegistrationComponent } from './components/app-registration/app-registration.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [AppLoginDefaultComponent, AppLoginComponent, AppRegistrationComponent],
  imports: [
    CommonModule,
    AppLoginRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule
  ]
})
export class AppLoginModule { }
