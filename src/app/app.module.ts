import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { ResponsivePageComponent } from './responsive-page/responsive-page.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: "vald",
    component: ValidationFormComponent
  },
  {
    path: "resp",
    component: ResponsivePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ValidationFormComponent,
    ResponsivePageComponent,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, 
      {
        enableTracing: true
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
