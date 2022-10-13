import {Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, } from '@angular/router';
import { BankService, } from '../services/bank.service';

@Injectable({
  providedIn: 'root',
})

export class BankFindAllResolver implements Resolve<any> {
  constructor(private bankService: BankService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.bankService.findAll();
  }
}
