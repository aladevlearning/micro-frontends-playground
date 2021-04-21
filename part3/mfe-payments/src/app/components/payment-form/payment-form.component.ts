import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentsService } from 'src/app/services/payments.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {
  visible = true;
  selected = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  paymentForm: FormGroup;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private fb: FormBuilder,
    private paymentsService: PaymentsService,
    private dialogRef: MatDialogRef<PaymentFormComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  /* Reactive form */
  reactiveForm() {
    this.paymentForm = this.fb.group({
      from_account: ['', [Validators.required, Validators.maxLength(8)]],
      to_account: ['', [Validators.required, Validators.maxLength(8)]],
      amount: [
        '',
        [Validators.required, Validators.pattern('^\\d+(.\\d{1,2})?$')],
      ],
      type: ['DOMESTIC'],
      currency: ['DKK'],
      message: ['', [Validators.maxLength(30)]],
      dueDate: ['', Validators.required],
    });
  }

  /* Date */
  date(e: any) {
    const convertDate = new Date(e.target.value).toISOString();
    this.paymentForm.get('dueDate')?.setValue(convertDate, {
      onlyself: true,
    });
  }

  async submitForm() {
    const { status } = this.paymentForm;

    if (status === 'INVALID') {
      this.snackBar.open('Payment creation failed, retry.', '', {
        duration: 2000,
      });
    } else {
      // tslint:disable-next-line:no-debugger
      debugger;
      const createdPayment = await this.paymentsService.createPayment(
        this.paymentForm.value
      );
      this.snackBar.open('Payment was created', '', {
        duration: 2000,
      });

      this.dialogRef.close({
        data: createdPayment,
      });
    }
    console.log(this.paymentForm);
  }

  getRequiredErrorIfAny(fieldControl: string) {
    return this.paymentForm?.get(fieldControl)?.hasError('required')
      ? 'This field is required.'
      : '';
  }

  getMaxLengthErrorIfAny(fieldControl: string) {
    return this.paymentForm?.get(fieldControl)?.hasError('maxength')
      ? 'This field is exceeding its max length.'
      : '';
  }
}
