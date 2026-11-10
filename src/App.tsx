import {
  fullName,
  yearsUntilRetirement,
  canVote,
  greet,
} from './helpers';

function App() {
  const name = fullName('Jeffrey', 'Oben');
  const age = 24;
  const retirementAge = 65;
  const yearsLeft = yearsUntilRetirement(age, retirementAge);

  return (
    <div>
      <h1>My TypeScript App</h1>
      <p>Hello! I am learning TypeScript.</p>

      <p>My name is {name}.</p>
      <p>I have {yearsLeft} years until retirement.</p>
      <p>Can I vote? {canVote(age) ? 'Yes' : 'No'}</p>

      <h2>Greetings</h2>
      <p>{greet('Sam')}</p>
      <p>{greet()}</p>
      <p>{greet('Jeffrey', 'Hi')}</p>
    </div>
  );
}

export default App;