import {Component, OnInit} from '@angular/core';
import {Address} from '../../model/address';
import {AddressService} from '../../service/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address: Address[];

  constructor(private addressService: AddressService) {
  }

  ngOnInit() {
    this.addressService.getAll().subscribe(result => {
        this.address = result;
        console.log(result);
      }, error => {
        console.log(error);
      }
    );
  }

}
