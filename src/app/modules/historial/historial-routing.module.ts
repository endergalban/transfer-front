import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { HistorialComponent, } from './historial.component';

const routes: Routes = [{
  path: '',
  component: HistorialComponent,
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
