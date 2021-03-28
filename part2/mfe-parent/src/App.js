import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <app-accounts></app-accounts>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <app-payments></app-payments>
    </div>
  );
}


export default withAuthenticator(App);
