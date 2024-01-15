import { useEffect, useState } from "react";
import { useCounterStore } from "./store";
import './App.css';

/*
- getState()를 통해서 컴포넌트 내부에 정의하지 않아도 외부에서 store 조작 가능 
- it works from updating a value outside of a component to actually getting that component to re-render
- outside of the component에서 setState로 초깃값 설정 바로 가능
*/
const setCount = () => {
  // const count = useCounterStore.getState().count; //the actual value is coming from here
  useCounterStore.setState({count: 1});
  // console.log("count", count);
}

const App = () => {
  //access updated value
  //listening to the account
  const count = useCounterStore((state) => state.count); 
  return <OtherComponent count={count} />;
};

const OtherComponent = ({count}: {count: number}) => {
  const incrementAsync = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state)=> state.decrement);

  useEffect(() => {
    setCount();
  }, []);

  return(
    <div>
      {count}
      <div>
        <button onClick={incrementAsync}> incrementAsync </button>
        <button onClick={decrement}> Decreament </button>
      </div>
    </div>
  );
};

export default App;