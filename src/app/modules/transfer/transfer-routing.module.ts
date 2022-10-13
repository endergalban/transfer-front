import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { ReceiverFindAllResolver } from '../receiver/resolvers/receiver-findall.resolver';
import { TransferComponent, } from './transfer.component';

const routes: Routes = [{
  path: '',
  component: TransferComponent,
  resolve: { receivers: ReceiverFindAllResolver, },
}, ];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule, ],
  providers: [
  ],
})
export class TransferRoutingModule { }

export const routedComponents = [
  TransferComponent,
];
