import './App.css';

function App() {
  const firstName = 'John';
  const lastName = 'Wick';
  const age = 28;
  const job = 'Gentelman';

  const mArr = [1,2,3,4];
  const mObj = {
    name: 'Toto',
    age: 30, 
  };

  const inputPlaceholder = 'Enter your details';

  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

  const detailsInputBox = <input placeholder={inputPlaceholder} autoComplete/>;

  return (
    <div className="App">
      <h3>Full name: {getFullName(firstName, lastName)}</h3>
      <p>Age: {mObj.age}</p>
      <p>Job: {job}</p>

      {detailsInputBox}

      {mArr[0]}

      
    </div>
  );
}

export default App;
