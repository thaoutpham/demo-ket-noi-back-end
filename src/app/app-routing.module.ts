import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddressComponent} from './components/address-list/address.component';
import {AddressCreateComponent} from './components/address-create/address-create.component';
import {AddressEditComponent} from './components/address-edit/address-edit.component';
import { AddressDeleteComponent } from './components/address-delete/address-delete.component';

const routes: Routes = [
  {
    path: 'address/list',
    component: AddressComponent
  }, {
    path: 'address/create',
    component: AddressCreateComponent
  }, {
    path: 'address/edit/:id',
    component: AddressEditComponent
  }, {
    path: 'address/delete/:id',
    component: AddressDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
