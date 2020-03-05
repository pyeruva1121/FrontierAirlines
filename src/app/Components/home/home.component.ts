import { Component, OnInit } from '@angular/core';
import { Account } from '../../Models/Account';
import { AccountsService } from 'src/app/Services/accounts.service';
import { AccountStatuses } from 'src/app/Models/AccountStatuses';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountsService) { }
  activeAccounts: Account[] = [] as Account[];
  overDueAccounts: Account[] = [] as Account[];
  inActiveAccounts: Account[] = [] as Account[];
  allAccounts: Account[] = [] as Account[];
  currentYear = new Date().getFullYear();
  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(res => {
      if (res) {
        this.allAccounts = res as Account[];
        // console.log(this.allAccounts);
        this.activeAccounts = this.allAccounts.filter(f => f.AccountStatusId === AccountStatuses.Active);
        this.overDueAccounts = this.allAccounts.filter(f => f.AccountStatusId === AccountStatuses.Overdue);
        this.inActiveAccounts = this.allAccounts.filter(f => f.AccountStatusId === AccountStatuses.Inactive);
        console.log(this.activeAccounts);
      }
    }, err => { console.log('Error Occured'); },
      () => { console.log('get all accounts service call completed'); });
  }

}
