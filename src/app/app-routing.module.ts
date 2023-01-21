import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { MainLayOutComponent } from './Component/MainLayOut/MainLayOut.component';
import { NotFoundComponent } from './Component/NotFound/NotFound.component';
import { OrderermasterComponent } from './Component/Order/orderermaster/orderermaster.component';
import { ProductDetailsComponent } from './Component/Order/product-details/product-details.component';
import { ProductListComponent } from './Component/Order/product-list/product-list.component';
import { UserLoginComponent } from './Component/UserLogin/UserLogin.component';

const routes: Routes = [
  {path:'',component:MainLayOutComponent, children:[
    {path:'',redirectTo:'/Home',pathMatch: 'full'},
    {path: 'Home', component :HomeComponent},
    {path:'products', component:ProductListComponent},
    {path:'products/:pid', component:ProductDetailsComponent},
    {path: 'Order',component:OrderermasterComponent },
  ]},

  {path:'UserLogin',component:UserLoginComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
