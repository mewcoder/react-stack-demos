import { useState, createContext, useContext } from "react";

const CountContext = createContext(null);
const SetCountContext = createContext(null);

export default function One() {
  const [count, setCount] = useState(1);

  return (
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={() => setCount(count + 1)}>
        <div>Test1</div>
        <Component1 />
        <Component2 />
      </SetCountContext.Provider>
    </CountContext.Provider>
  );
}

function Component1() {
  const value = useContext(CountContext);
  const setter = useContext(SetCountContext);
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      [{value}]-id:{(Math.random() + "").slice(2, 4)}
      <button onClick={setter}>update</button>
    </div>
  );
}

function Component2() {
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      id:{(Math.random() + "").slice(2, 4)}
    </div>
  );
}
