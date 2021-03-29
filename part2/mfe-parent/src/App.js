import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AmplifySignOut, AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  const [authState, setAuthState] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange(newAuthState => {
      setAuthState(newAuthState)
    });
  }, []);

  return (
    <div className="App">
      <AmplifyAuthenticator>
        {authState !== "signedin" &&
          <AmplifySignIn hideSignUp />
        }
        {authState === "signedin" &&
          <div>
            <AmplifySignOut />
            <app-accounts></app-accounts>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <app-payments></app-payments>
          </div>
        }

      </AmplifyAuthenticator>
    </div>
  );
}


export default App;
