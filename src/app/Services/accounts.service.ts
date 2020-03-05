import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  getAllAccounts() {
    return this.http.get('https://frontiercodingtests.azurewebsites.net/api/accounts/getall');
  }
}
