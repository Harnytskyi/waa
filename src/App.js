import './App.css';

function saveCredentials(){
  console.log("credentials will be saved");
}

function retrieveCredentials(){
  console.log("");
}

function App() {
  return (
    <div className="App">
      <input type="text" id="username" />
      <input type="password" id="password" />
      <button onClick={saveCredentials}>Save credentials</button>
      <button onClick={retrieveCredentials}>Retrieve credentials</button>
    </div>
  );
}

export default App;
