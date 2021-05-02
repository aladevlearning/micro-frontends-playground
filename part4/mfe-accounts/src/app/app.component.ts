import { Component, OnInit } from '@angular/core';

import { API } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mfe-accounts';
  accounts = [];

  ngOnInit() {
    API.get('accounts', '/accounts', {}).then((data) => {
      this.accounts = data;
    });
  }
}
