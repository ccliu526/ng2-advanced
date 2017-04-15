import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent } from "app/charts/flot/flot.component";
import { RadialComponent } from "app/charts/radial/radial.component";

const routes: Routes = [
  { path:'charts',
    children:[
      { path:'', redirectTo:'flot', pathMatch:'full' },
      { path:'flot', component:FlotComponent },
      { path:'radial', component:RadialComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
