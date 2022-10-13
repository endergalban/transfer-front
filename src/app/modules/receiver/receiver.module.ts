import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { NgModule, } from '@angular/core';
import { ReceiverRoutingModule } from './receiver-routing.module';
import { ReceiverComponent, } from './receiver.component';

@NgModule({
  imports: [
    ReceiverRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    ReceiverComponent,
  ],
  providers: [
  ],
})
export class ReceiverModule { }

