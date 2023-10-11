import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount,incrementAsync } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
        <button onClick={() => dispatch(incrementAsync(2))}>+2 async</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}
