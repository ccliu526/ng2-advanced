import { ClassicComponent } from './forms/classic/classic.component';
import { LoginGuard } from './login.guard';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Route, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from "app/cards/cards.component";
import { LayoutComponent } from "app/layout/layout.component";
import { LoginComponent } from "app/login/login.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
        canActivate: [LoginGuard]
      },
      {
        path: 'forms',
        children:[
          {path:'classic',component:ClassicComponent}
        ]
      },
    ]
  },

  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
