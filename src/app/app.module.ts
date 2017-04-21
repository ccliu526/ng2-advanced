import { LoginGuard } from './login.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsModule } from './charts/charts.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ClassicComponent } from './forms/classic/classic.component';
import { Template1Component } from './template1/template1.component';
import { CouterBtnDirective } from './couter-btn.directive';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    LoginComponent,
    LayoutComponent,
    ClassicComponent,
    Template1Component,
    CouterBtnDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
