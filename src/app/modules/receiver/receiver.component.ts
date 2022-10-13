import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RECEIVERCONSTANT } from './receiver.constant';
import { ReceiverService } from './services/receiver.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private receiverService: ReceiverService,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  form: FormGroup = this.createForm();
  receivers: any = [];
  banks: any = [];
  accountTypes: any = [
    { name: 'Cuenta Vista' },
    { name: 'Cuenta Corriente' },
    { name: 'Cuenta de Ahorro' },
  ];
  loading: boolean = false;

  ngOnInit(): void {
    this.receivers = this.route.snapshot.data['receivers'];
    this.banks = this.route.snapshot.data['banks']['banks'];
  }

  createForm() {
    const group = {
      name: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.pattern(RECEIVERCONSTANT.regex.text),
      ], ],
      identification: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(11),
        Validators.pattern(RECEIVERCONSTANT.regex.rut),
      ], ],
      email: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
        Validators.pattern(RECEIVERCONSTANT.regex.email),
      ], ],
      phone: ['', [
        Validators.required,
        Validators.pattern(RECEIVERCONSTANT.regex.phone),
      ], ],
      accountNumber: [null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern(RECEIVERCONSTANT.regex.number),
      ], ],
      bank: [null, [ Validators.required ], ],
      accountType: [null, [ Validators.required ], ],
    };

    return this.fb.group(group);
  }

  onSubmit(): void {
    if (!this.loading) {
      this.form.disable();
      this.loading = true;
      const payload = this.form.value;
      payload.bank = this.banks[payload.bank].name;
      payload.accountNumber = parseInt(payload.accountNumber, 10);
      payload.accountType = this.accountTypes[payload.accountType].name;
      this.receiverService.create(payload).subscribe({
        next: (receiver) => this.succesSubmit(receiver),
        error: (e) => this.errorSubmit()
      });
    }
  }

  succesSubmit(receiver: any) {
    this.receivers.push(receiver)
    this.form.enable();
    this.form.reset();
    this.loading = false;
  }
  
  errorSubmit() {
    this.form.enable();
    this.loading = false;
  }     
}
