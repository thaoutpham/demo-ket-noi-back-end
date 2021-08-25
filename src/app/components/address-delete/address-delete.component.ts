import { Component, OnInit } from '@angular/core';
import {AddressService} from '../../service/address.service';
import {ActivatedRoute} from '@angular/router';
import {Address} from '../../model/address';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address-delete',
  templateUrl: './address-delete.component.html',
  styleUrls: ['./address-delete.component.css']
})
export class AddressDeleteComponent implements OnInit {
address: Address;
addressForm: FormGroup;
  constructor(private addressService: AddressService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('id');
      console.log(id);
      this.addressService.getById(id).subscribe(result =>{
        this.address = result;
        console.log(result);
        this.addressForm = new FormGroup({
          id: new FormControl(this.address.id),
          name: new FormControl(this.address.name)
        });
      },error => {
        console.log(error);
        }
      )
    });
    this.address = {
      id: '0',
      name: 'hello'
    }
  }
deleteAddress(){
    const address = this.addressForm.value;
    console.log(address);
    this.addressService.deleteAddress(address.id).subscribe(bac =>{
      alert('Xóa thành công');
      history.back();
  })
}
}
