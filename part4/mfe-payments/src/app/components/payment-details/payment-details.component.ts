import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment } from 'src/PaymentsAPI';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentDetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Payment) {}

  ngOnInit(): void {}
}
