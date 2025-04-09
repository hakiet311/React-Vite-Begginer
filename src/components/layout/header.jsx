import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="h-auto bg-slate-700">
      <div>
        <Link
          className="p-3 bg-sky-600 inline-block hover:bg-sky-800 transition-all duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-3 bg-sky-600 inline-block hover:bg-sky-800 transition-all duration-300"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="p-3 bg-sky-600 inline-block hover:bg-sky-800 transition-all duration-300"
          to="/signup"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
