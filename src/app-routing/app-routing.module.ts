import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { AddproductComponent } from "../addproduct/addproduct.component";
import { ViewproductComponent } from "../viewproduct/viewproduct.component";
import {HomeComponent} from "../home/home.component";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "Addproduct",
    component: AddproductComponent
  },
  {
  path: "viewproduct",
  component:ViewproductComponent
  },
  {
  path:"home",
  component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}