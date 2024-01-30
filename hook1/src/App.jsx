import { useState } from 'react';
import State1 from './Component/State1';
import Toggle from './Component/Toggle';

function App() {
  const [num, setNum] = useState(19);
  //useState
  //useEffect
  //useContext

  return (
    <div>
      <Toggle />
    </div>
  );
}

export default App;

//react App is started the JSX is mounted on browser

// react App updated the state

//react app re-render's the UI
// function call() {

//   return;
// }
