import React from 'react';
import './App.css';
import { AmplifySignOut, AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
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

  return (
    <div className="App">
      <AmplifyAuthenticator>
        {authState !== "signedin" &&
          <AmplifySignIn slot="sign-in" hideSignUp />
        }
        {authState === "signedin" &&
          <div>
            <AmplifySignOut />
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
