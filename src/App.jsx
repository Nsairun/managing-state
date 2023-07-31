import { useState } from 'react';
import './styles/App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const fullName = `${firstName} ${secondName}`;

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleSecondName(e) {
    setSecondName(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <h1>First Name</h1>
        <input
          type="text"
          placeholder="firstName"
          value={firstName}
          onChange={handleFirstName}
          style={{ height: '6vh', borderRadius: '10px', width: '30vw' }}
        />
      </div>
      <div>
        <h1>Second Name</h1>
        <input
          type="text"
          placeholder="secondName"
          value={secondName}
          onChange={handleSecondName}
          style={{ height: '6vh', borderRadius: '10px', width: '30vw' }}
        />
      </div>
      <p>Full Name : {fullName}</p>
    </div>
  );
}

export default App;
