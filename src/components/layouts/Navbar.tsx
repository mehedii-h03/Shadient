import { Link, NavLink } from "react-router-dom";
import Container from "../ui/Container";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink className="text-base font-semibold" to="/relief-goods">
          All Relief Goods
        </NavLink>
      </li>
      <li>
        <NavLink className="text-base font-semibold" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="border-b">
      <Container>
        <nav className="navbar py-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
                <a className="btn">Button</a>
              </ul>
            </div>
            <Link
              to="/"
              className="btn bg-transparent hover:bg-transparent border-0 shadow-none p-0"
            >
              <img className="h-9" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex gap-3">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
            <Link to={"/login"} className="primary-btn">
              Login
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
