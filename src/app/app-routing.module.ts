import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [{path:'',component:ViewproductComponent},
{path:'addproduct',component:AddproductComponent},
{path:'addproduct/:pId',component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
