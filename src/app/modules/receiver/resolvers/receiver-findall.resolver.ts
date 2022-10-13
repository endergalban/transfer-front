import {Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, } from '@angular/router';
import { ReceiverService, } from '../services/receiver.service';

@Injectable({
  providedIn: 'root',
})

export class ReceiverFindAllResolver implements Resolve<any> {
  constructor(private receiverService: ReceiverService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.receiverService.findAll();
  }
}
