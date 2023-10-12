import { lazy, Suspense } from "react";
import { Spin } from "antd";

function LazyWrapper(path: string) {
  // const LazyComponent = lazy(() => import(`src/views/${path};

  // 模拟慢加载
  const LazyComponent = lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(import(/* @vite-ignore */ `/src/views/${path}`));
        }, 1000);
      })
  );

  return (
    <Suspense
      fallback={
        <div id="loading">
          <Spin size="large" />
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  );
}

export default LazyWrapper;
