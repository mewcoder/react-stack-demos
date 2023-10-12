import { useState, memo } from "react";

// 耗性能的组件
function Child({ name }) {
  const now = performance.now();
  while (performance.now() - now < 200) {
    //  delay
  }

  return (
    <div style={{ border: "1px solid", padding: "10px" }}>
      [{name}]-id:{(Math.random() + "").slice(2, 4)}
    </div>
  );
}

const ChildMemo = memo(Child);

function Parent() {
  const [count, setCount] = useState(1);
  return (
    <>
      <h3>
        count:{count}
        <button onClick={() => setCount(count + 1)}>update</button>
      </h3>
      <Child name="child" />
      <ChildMemo name="memo child" />
    </>
  );
}

function Wrapper({ children }) {
  // count 变化时，Wrap 会重新渲染，但是 children 并没有变化
  const [count, setCount] = useState(1);

  return (
    <>
      <h3>
        count:{count}
        <button onClick={() => setCount(count + 1)}>update</button>
      </h3>
      {children}
    </>
  );
}

function Parent1() {
  return (
    <Wrapper>
      <div>Test2</div>
      {/* 注意 Child 不是Parent 的子组件，而是 App 的子组件，而 App 并没有状态变化 */}
      <Child name="child" />
      <ChildMemo name="child memo" />
    </Wrapper>
  );
}

export default Parent1;
