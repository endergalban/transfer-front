import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { BankFindAllResolver } from '../bank/resolvers/bank-findall.resolver';
import { ReceiverComponent, } from './receiver.component';
import { ReceiverFindAllResolver } from './resolvers/receiver-findall.resolver';

const routes: Routes = [{
  path: '',
  component: ReceiverComponent,
  resolve: {
    receivers: ReceiverFindAllResolver,
    banks: BankFindAllResolver,
  },
}, ];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule, ],
  providers: [
  ],
})
export class ReceiverRoutingModule { }

export const routedComponents = [
  ReceiverComponent,
];
