import React from 'react';
import './App.css';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  const [authState, setAuthState] = React.useState();
  const routing = useRoutes(routes);

  React.useEffect(() => {
    return onAuthUIStateChange(newAuthState => {
      setAuthState(newAuthState)
    });
  }, []);

  /*
  const signUp = async ({ username, password, email, tenantId, tenantName }) => {
    try {
      debugger;
      const signedUser = await Auth.signUp({
        username,
        password,
        'attributes': {
          email,
          'custom:tenantId': tenantId,
          'custom:tenantName': tenantName
        }
      });


      console.log('Signed up user:', signedUser);
    } catch (e) {
      console.error(e);
    }

  };

  signUp({
    username: 'userTenantA',
    password: 'passwordA',
    email: 'lagrotteri@gmail.com',
    tenantId: 'TenantA',
    tenantName: 'TenantNameA',
  });
*/
  return (
    <div className="App">
      <AmplifyAuthenticator>
        {authState !== "signedin" &&
          <AmplifySignIn slot="sign-in" hideSignUp />
        }
        {authState === "signedin" &&
          <div>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              {routing}
            </ThemeProvider>
          </div>
        }

      </AmplifyAuthenticator>
    </div>
  );
}


export default App;
