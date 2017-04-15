import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from "app/home/home.component";
import { fallbackRoute } from "app/shared/fallback-route";

const routes: Routes = [
  { path: '', redirectTo: '/layout', pathMatch:'full' },
  { path: 'layout', component: LayoutComponent },
  { path: 'home', component: HomeComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
