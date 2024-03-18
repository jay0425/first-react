import './App.css';
import { useState } from 'react';
import Box from './component/Box';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log('counter는', counter, 'counter2 state는', counter2);
  };

  /*
  1. 유저가 버튼을 클릭한다.
  2. counter+1해서 1이됨
  3. setState함수 호출
  4. console.log 실행됨
     변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전에 값이 보인다.
     함수 끝
     app 다시 re render
     let counter = 0 을 거치면서 counter 값은 다시 0으로 초기화된다.
     update된 state값이 보인다. 그리고 완료.
  */
  return (
    <div>
      <Box name="리사" num={1} />
      <Box name="제니" num={2} />
      <Box name="지수" num={3} />

      <div>{counter}</div>
      <div>state: {counter2} </div>
      <button onClick={increase}>큻릭!</button>
    </div>
  );
}

export default App;
