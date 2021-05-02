import { Component, OnInit } from '@angular/core';

import { API, Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mfe-accounts';
  accounts = [];

  async ngOnInit() {
    API.get('accounts', '/accounts', {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
    }).then((data) => {
      this.accounts = data;
    });
  }
}
