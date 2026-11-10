import { fullName, yearsUntilRetirement } from './helpers';

function App() {
  const name = fullName('Jeffrey', 'Oben');
  const yearsLeft = yearsUntilRetirement(24, 60);

  return (
    <div>
      <h1>My TypeScript App</h1>
      <p>Hello! I am learning TypeScript.</p>
      <p>My name is {name}.</p>
      <p>I have {yearsLeft} years until retirement.</p>
    </div>
  );
}

export default App;