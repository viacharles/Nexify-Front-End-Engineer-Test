import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { SalaryManagementComponent } from './modules/salary-management/salary-management.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SalaryManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
