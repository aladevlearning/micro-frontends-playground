import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';
import { PaymentsService } from 'src/app/services/payments.service';
import { Payment } from 'src/PaymentsAPI';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table-overview-example',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.scss'],
})
export class TableOverviewComponent implements OnInit {
  isLoading = true;
  displayedColumns = [
    'from_account',
    'to_account',
    'amount',
    'dueDate',
    'actions',
  ];
  dataSource: MatTableDataSource<any>;
  payments: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private paymentService: PaymentsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    this.payments = await this.paymentService.getPayments();
    this.isLoading = false;
    if (this.payments) {
      this.dataSource = new MatTableDataSource(this.payments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  async openDetails(row: Payment) {
    const foundPayment = await this.paymentService.getPaymentById(row.id);

    if (foundPayment) {
      const dialogRef = this.dialog.open(PaymentDetailsComponent, {
        data: foundPayment,
      });
      console.log(row);
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  async deletePayment(row: Payment) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete Payment',
        message:
          'Are you sure, you want to delete payment with amount: ' + row.amount,
      },
    });

    confirmDialog.afterClosed().subscribe((result) => {
      if (result === true) {
        this.paymentService
          .deletePaymentById(row.id)
          .then(() => {
            const index = this.dataSource.data.findIndex(
              (payment: Payment) => payment.id === row.id
            );
            this.dataSource.data.splice(index, 1);
            this.dataSource.paginator = this.paginator;
          })
          .then(() => {
            this.snackBar.open('Payment was deleted.', '', {
              duration: 2000,
            });
          });
      }
    });
  }

  async createPayment() {
    const createPaymentDialog = this.dialog.open(PaymentFormComponent);

    createPaymentDialog.afterClosed().subscribe((result) => {
      const { createPayment } = result.data;
      if (createPayment) {
        this.payments.unshift(createPayment);
        // this.dataSource = this.payments.slice(0, this.paginator.pageSize);
        this.dataSource.data = this.payments;
      }
    });
  }
}
