import { Link, useParams } from "react-router-dom";

function TaskDetail() {
  const { id } = useParams();
  return (
    <>
      <h2>Detail:{id}</h2>
      <Link to="..">return</Link>
    </>
  );
}
export default TaskDetail;
