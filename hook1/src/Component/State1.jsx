import { useState } from 'react';
import State2 from './State2';
import Hookeffect1 from './Hookeffect1';
function State1(props) {
  const [age, setAge] = useState(19);
  const [siblings, setSiblings] = useState(1); //2

  const handleClickAge = () => {
    setAge(age + 1);
  };
  const handleClickSibling = () => {
    setSiblings(siblings + 1);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>State 1</h1>
      <h1>My age is {age}</h1>

      <h1>My siblings: {siblings}</h1>

      <button onClick={handleClickAge}>Get older</button>

      <button onClick={handleClickSibling}>Get More Sibling</button>

      <State2 num={props.num} />
    </div>
  );
}
export default State1;
