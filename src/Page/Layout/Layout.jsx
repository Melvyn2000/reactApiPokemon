import { render } from "@testing-library/react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  const token = localStorage.getItem('token');

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {token ? <li><Link to="/logout">Logout</Link></li> : <li><Link to="/login">Login</Link></li>}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;