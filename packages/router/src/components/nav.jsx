import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="task">task</Link>
      <Link to="about">about</Link>
    </div>
  );
}
