import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { TransferFindAllResolver } from '../transfer/resolvers/transfer-findall.resolver';
import { HistorialComponent, } from './historial.component';

const routes: Routes = [{
  path: '',
  component: HistorialComponent,
  resolve: { transfers: TransferFindAllResolver, },
}, ];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule, ],
  providers: [
  ],
})
export class HistorialRoutingModule { }

export const routedComponents = [
  HistorialComponent,
];
