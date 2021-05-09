import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createCustomElement } from '@angular/elements';
import { AccountsListComponent } from './accounts-list/accounts-list.component';

const modules = [
  MatListModule,
  MatTreeModule,
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [AppComponent, AccountsListComponent],
  imports: [BrowserModule, AppRoutingModule, ...modules],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define('app-accounts', myElement);
  }
}
