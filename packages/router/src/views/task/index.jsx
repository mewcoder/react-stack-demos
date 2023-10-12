import { Link, Outlet } from "react-router-dom";

function Task() {
  return (
    <>
      <h1>Task</h1>
      <Link to="222">222</Link>
      <Outlet />
    </>
  );
}
export default Task;
