import {Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, } from '@angular/router';
import { TransferService, } from '../services/transfer.service';

@Injectable({
  providedIn: 'root',
})

export class TransferFindAllResolver implements Resolve<any> {
  constructor(private transferService: TransferService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.transferService.findAll();
  }
}
