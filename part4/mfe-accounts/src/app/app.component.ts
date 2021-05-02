import { Component } from '@angular/core';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe-accounts';
  accounts = [];

  ngOnInit() {
    API.get('accountsRest', '/accounts', {}).then((result) => {
      console.log(result);
    });
  }
}
