import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from "app/cards/cards.component";

const routes: Routes = [
  { path:'dashboard', component:DashboardComponent },
  { path:'cards/:type', component:CardsComponent },
  { path:'charts',
    loadChildren:'./charts/charts.module#ChartsModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
