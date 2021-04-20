import { Component, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';
import { PaymentsService } from 'src/app/services/payments.service';
import { Payment } from 'src/PaymentsAPI';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table-overview-example',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.scss'],
})
export class TableOverviewComponent {
  displayedColumns = [
    'from_account',
    'to_account',
    'amount',
    'currency',
    'dueDate',
    'actions',
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private paymentService: PaymentsService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    const payments = await this.paymentService.getPayments();
    console.log(payments);
    if (payments) {
      this.dataSource = new MatTableDataSource(payments);
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
}
