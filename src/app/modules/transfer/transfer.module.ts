import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { NgModule, } from '@angular/core';
import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent, } from './transfer.component';
import { RutPipe } from '../pipes/rut.pipe';

@NgModule({
  imports: [
    TransferRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    TransferComponent,
    RutPipe,
  ],
  providers: [
  ],
})
export class TransferModule { }

