import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { NgModule, } from '@angular/core';
import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComponent, } from './historial.component';

@NgModule({
  imports: [
    HistorialRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    HistorialComponent,
  ],
  providers: [
  ],
})
export class HistorialModule { }

