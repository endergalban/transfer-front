import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TransferService } from '../transfer/services/transfer.service';
import { APPCONSTANT } from '../app.constant';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private transferService: TransferService,
    private fb: FormBuilder,
  ) { }
  
  receivers: any[] = [];
  receiver: any = null;
  form: FormGroup = this.createForm();
  loading: boolean = false;
  successMessage: boolean = false;
  errorMessage: boolean = false;

  ngOnInit(): void {
    this.receivers = this.route.snapshot.data['receivers'];
  }

  createForm() {
    const group = {
      amount: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
        Validators.pattern(APPCONSTANT.regex.number),
      ], ],
      receiverId: [null, [ Validators.required ], ],
    };

    return this.fb.group(group);
  }

  loadReceiver(event: any) {
    const index = event.target.value
    this.receiver = this.receivers[parseInt(index, 10)];
    this.successMessage = false;
    this.errorMessage = false;
  }

  onSubmit(): void {
    if (!this.loading) {
      this.form.disable();
      this.loading = true;
      const payload = {
        amount: parseInt(this.form.get('amount')?.value, 10),
        receiverId: this.receivers[this.form.get('receiverId')?.value].id,
      }
      this.transferService.create(payload).subscribe({
        next: (transfer) => this.succesSubmit(transfer),
        error: (e) => this.errorSubmit()
      });
    }
  }

  succesSubmit(receiver: any) {
    this.receiver = null;
    this.form.enable();
    this.form.reset();
    this.successMessage = true;
    this.loading = false;
  }
  
  errorSubmit() {
    this.receiver = null;
    this.form.enable();
    this.form.reset();
    this.loading = false;
    this.errorMessage = true;
  }

}
