import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { AddproductComponent } from "../addproduct/addproduct.component";
import { ViewproductComponent } from "../viewproduct/viewproduct.component";
import { HomeComponent } from "../home/home.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCardHarness } from "@angular/material/card/testing";
import { MatGridListModule } from "@angular/material/grid-list";
import 'bootstrap/dist/css/bootstrap.min.css';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    MatGridListModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    RegisterComponent,
    LoginComponent,
    AddproductComponent,
    ViewproductComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
