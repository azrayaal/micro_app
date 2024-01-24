import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <>
      <Link to="/">
        <p className="text-4xl font-bold mb-2 ml-5 pl-5 py-2 my-5">◀</p>
      </Link>
    </>
  );
}
