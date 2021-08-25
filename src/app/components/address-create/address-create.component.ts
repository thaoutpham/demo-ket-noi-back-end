import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AddressService} from '../../service/address.service';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {
  constructor( private addressService: AddressService) { }

  ngOnInit(): void {
  }
addressForm: FormGroup = new FormGroup({
  name: new FormControl()
});
createAddress(){
  const address = this.addressForm.value;
  console.log(address);
  this.addressService.getAddress(address).subscribe(() =>{
    alert("Create Ok");
  }, error  =>{
    console.log(error);
  });
}
}
