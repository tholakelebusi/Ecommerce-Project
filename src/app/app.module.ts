import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { AddproductComponent } from "../addproduct/addproduct.component";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  imports: [BrowserModule, FormsModule, MatIconModule,MatButtonModule,AppRoutingModule,RouterModule,Routes],
  declarations: [AppComponent,HelloComponent,RegisterComponent,
LoginComponent,
    AddproductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
