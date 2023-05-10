import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JrRoutingModule } from './jr-routing.module';
import { JrComponent } from './jr.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material';

@NgModule({
  declarations: [JrComponent, LoginComponent],
  imports: [
    BrowserModule,
    JrRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [JrComponent],
})
export class JrModule {}
