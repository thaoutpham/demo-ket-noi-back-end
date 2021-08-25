import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from '../model/address';

const API_URL = 'http://localhost:8080/api/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) {
  }
  getAddress(address: Address): Observable<Address> {
    return this.httpClient.post<Address>(API_URL,address)
  }

  getAll(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(API_URL);
  }

  getById(id: string | null):Observable<Address>{
    return this.httpClient.get<Address>(API_URL + `/${id}`);
}
updateAddress(id: string, address: Address): Observable<Address> {
    return this.httpClient.put<Address>(API_URL + `/${id}`, address);
}
deleteAddress(id: string): Observable<Address> {
    return this.httpClient.delete<Address>(API_URL + `/${id}`);
}
}
