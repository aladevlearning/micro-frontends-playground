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
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';

const modules = [
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
];

@NgModule({
  declarations: [AppComponent, TableOverviewComponent, PaymentDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...modules,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const app = createCustomElement(AppComponent, { injector });
    customElements.define('app-payments', app);
  }
  ngDoBootstrap() {}
}
