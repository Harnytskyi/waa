import React, { useCallback, useState } from 'react';
import {useWebAuthn} from 'react-hook-webauthn'
import './App.css';

const rpOptions = {
  rpId: 'harnytskyi.github.io',
  rpName: 'my super app'
}

function App() {
  const [login, setLogin] = useState('')
  const {getCredential, getAssertion} = useWebAuthn(rpOptions)

  const onChangeLogin = useCallback((e) => {
    setLogin(e.target.value)
  }, [])

  const saveCredentials = useCallback(async  () => {
    const credential = await getCredential({
      challenge: 'stringFromServer',
      userDisplayName: login,
      userId: login,
      userName: login
    })
    console.log(credential)
    alert("Saved: " + login)
    let savedId = document.getElementById('savedId');
    savedId.innerHTML = login;    
  }, [getCredential, login])

  const retrieveCredentials = useCallback(async () => {
    const assertion =  await getAssertion({challenge: 'stringFromServer'})
    console.log(assertion)
    let retrievedId = document.getElementById('retrievedId');
    retrievedId.innerHTML = assertion.id;
    alert("Retrieved " + assertion.id) 
  }, [getAssertion])

  return (
    <div className="App">
      <main>
        <div className="section">
          <input onInput={onChangeLogin} placeholder="login" type="text" id="username"/>
        </div>
         <div className="section">
           <button onClick={saveCredentials} type="button">Save credentials</button>
         </div>
        <div className="del"/>
        <div className="section">
          <button onClick={retrieveCredentials} type="button">Retrieve credentials</button>
        </div>
        <div className="credentials">
          <span>Saved credential: </span>
          <span id="savedId"></span>
          <span>Retrieve credential: </span>
          <span id="retrievedId"></span>
        </div>
      </main>
    </div>
  );
}

export default App;
