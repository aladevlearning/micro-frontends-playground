import { Component } from '@angular/core';
import { API, Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe-accounts';

  async ngOnInit() {
    const user = await Auth.signIn('userTenantA', 'passwordA');

    const session = await Auth.currentSession();
    console.log({ session });
    const jwt = session.getIdToken().getJwtToken();
    console.log({ jwt });

    const myInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    console.log({ user });
    const accounts = await API.get('accountsRestApi', '/accounts', myInit);

    console.log({ accounts });
  }
}
