import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { AddproductComponent } from "../addproduct/addproduct.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    RegisterComponent,
    LoginComponent,
    AddproductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
