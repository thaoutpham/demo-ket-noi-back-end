import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AddressComponent } from './components/address-list/address.component';
import { AddressCreateComponent } from './components/address-create/address-create.component';
import {AddressEditComponent} from './components/address-edit/address-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddressDeleteComponent } from './components/address-delete/address-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddressCreateComponent,
    AddressEditComponent,
    AddressDeleteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
