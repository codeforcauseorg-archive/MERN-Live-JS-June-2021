import logo from './logo.svg';
import './App.css';
import { User } from 'firebase/app'
import { cfaSignIn, cfaSignOut } from 'capacitor-firebase-auth';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  const handleAuth = () => {
    cfaSignIn('google.com').subscribe(
      (user) => setUser(user)
    )
  }

  const handleSignOut = () => {
    cfaSignOut().subscribe()
  }

  return (
    <div className="App">
      <button onClick={handleAuth}>SignIN</button>
      <button onClick={handleSignOut}>Sign Out</button>
      {user ? <h1>{user.displayname}</h1> : <h3>No user</h3>}
      <header className="App-header">
        <img src={"https://images.theconversation.com/files/350851/original/file-20200803-22-dfm95n.jpg?ixlib=rb-1.1.0&rect=0%2C750%2C5760%2C2880&q=45&auto=format&w=1356&h=668&fit=crop"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
