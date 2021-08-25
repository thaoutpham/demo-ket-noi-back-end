import {Component, OnInit} from '@angular/core';
import {AddressService} from '../../service/address.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../model/address';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
  address: Address;
  constructor(private addressService: AddressService, private ac: ActivatedRoute) {
  }
addressForm: FormGroup = new FormGroup({
  id: new FormControl('',[Validators.required]),
  name: new FormControl('',[Validators.required])
})
  ngOnInit(): void {
    this.ac.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      // console.log(id);
      this.addressService.getById(id).subscribe(result => {
          this.address = result;
          this.addressForm = new FormGroup({
            id: new FormControl(this.address.id),
            name: new FormControl(this.address.name)
          });
          // console.log(result);
        }, error => {
          console.log(error);
        }
      );
    });
    this.address = {
      id: '1',
      name: 'hello'
    }
  }
  updateAddress(){
    const address = this.addressForm.value;
    console.log(address)
   // @ts-ignore
    this.addressService.updateAddress(this.address.id ,address).subscribe(abc =>{
      alert('Edit Ok')
      history.back()
    })
}

}
