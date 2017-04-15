import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from "app/cards/cards.component";
import { RadialComponent } from "app/charts/radial/radial.component";
import { FlotComponent } from "app/charts/flot/flot.component";

const routes: Routes = [
  { path:'dashboard', component:DashboardComponent },
  { path:'cards/:type', component:CardsComponent },
  { path:'charts',
    children:[
      { path:'', redirectTo:'flot', pathMatch:'full' },
      { path:'flot', component:FlotComponent },
      { path:'radial', component:RadialComponent },
    ]
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
