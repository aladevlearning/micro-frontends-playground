import { Injector, NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { TableOverviewComponent } from './components/table-overview/table-overview.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';

const modules = [
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatMenuModule,
  MatSnackBarModule,
  MatSortModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatRadioModule,
  MatNativeDateModule,
  MatDatepickerModule,
];

@NgModule({
  declarations: [
    AppComponent,
    TableOverviewComponent,
    PaymentDetailsComponent,
    ConfirmDialogComponent,
    PaymentFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...modules,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const app = createCustomElement(AppComponent, { injector });
    customElements.define('app-payments', app);
  }
  ngDoBootstrap() {}
}
