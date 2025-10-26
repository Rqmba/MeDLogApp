import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/history">History</Link>
    </div>
  );
};

export default Navbar;
