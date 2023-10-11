import { useReducer, useEffect } from "react";
import store from "../store";

export default function Basic() {
  const { num } = store.getState();

  const [, forceRerender] = useReducer((x) => x + 1, 0);

  // 更新视图
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceRerender();
    });
    return () => {
      // 取消监听
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <span>{num}</span>
      <button
        onClick={() => {
          store.dispatch({
            type: "PLUS",
            payload: 2,
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "MINUS",
          });
        }}
      >
        -
      </button>
    </div>
  );
}
