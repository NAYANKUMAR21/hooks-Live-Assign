import { useState } from 'react';
import Hookeffect1 from './Hookeffect1';

function State2(props) {
  const [data, setData] = useState({
    age: 20,
    siblings: 1,
  });

  const handleClickAge = () => {
    setData({ ...data, age: data.age + 1 });
  };

  const handleClickSibling = () => {
    setData({ ...data, siblings: data.siblings + 1 });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>State 2</h1>

      <h1>My age is : {data.age} </h1>

      <h1>My siblings:{data.siblings} </h1>

      <button onClick={handleClickAge}>Get age</button>

      <button onClick={handleClickSibling}>Get Siblings</button>

      <Hookeffect1 num={props.num} />
    </div>
  );
}
export default State2;
// let arr = [1, 2, 3];
// let xyz = [...arr, 4];

// let obj = {
//   num1: 20,
// };

// let newOj = {
//   ...obj,
//   num2: 30,
// };

// let age = 20;
// age = 21;
