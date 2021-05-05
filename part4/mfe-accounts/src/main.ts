import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.Logger.LOG_LEVEL = 'DEBUG';

Amplify.configure({
  ...awsconfig,
  API: {
    aws_cloud_logic_custom: [
      {
        name: awsconfig.aws_cloud_logic_custom[0].name,
        endpoint: awsconfig.aws_cloud_logic_custom[0].endpoint,
        region: awsconfig.aws_cloud_logic_custom[0].region,
        custom_header: async () => {
          return {
            Authorization: `${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`,
          };
        },
      },
    ],
  },
});
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
