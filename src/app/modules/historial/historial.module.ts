import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { NgModule, } from '@angular/core';
import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComponent, } from './historial.component';
import { DateMomentPipe } from '../pipes/date-moment.pipe';
import { RutPipe } from '../pipes/rut.pipe';
import { NumberWithCommasPipe } from '../pipes/number-with-commas.pipe';

@NgModule({
  imports: [
    HistorialRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    DateMomentPipe,
    RutPipe,
    NumberWithCommasPipe,
    HistorialComponent,
  ],
  providers: [
  ],
})
export class HistorialModule { }

