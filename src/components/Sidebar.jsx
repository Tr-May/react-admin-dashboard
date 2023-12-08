import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="sidebar d-flex justify-content-between flex-column bg-dark text-white vh-100">
      <div>
        <a href="#" className="p-2 mt-2 d-inline-block text-decoration-none">
          <i className="bi bi-code-slash me-4"></i>
          <span className="">Admin</span>
        </a>
        <hr className="text-white mt-2" />
        <ul className="nav nav-pills flex-column mt-2">
          <li
            className={active === 1 ? "active nav-item py-3" : "nav-item py-3"}
            onClick={(e) => setActive(1)}
          >
            <Link
              to="/"
              className="p-3 text-decoration-none text-center text-md-start"
            >
              <i className="bi bi-speedometer2 me-3 fs-5"></i>
              <span className="d-none d-md-inline">Dashboard</span>
            </Link>
          </li>
          <li
            className={active === 2 ? "active nav-item py-3" : "nav-item py-3"}
            onClick={(e) => setActive(2)}
          >
            <Link
              to="/users"
              className="p-3 text-decoration-none text-center text-md-start"
            >
              <i className="bi bi-people me-3 fs-5"></i>
              <span className="d-none d-md-inline">Users</span>
            </Link>
          </li>
          <li
            className={active === 3 ? "active nav-item py-3" : "nav-item py-3"}
            onClick={(e) => setActive(3)}
          >
            <Link
              to="/orders"
              className="p-3 text-decoration-none text-center text-md-start"
            >
              <i className="bi bi-table me-3 fs-5"></i>
              <span className="d-none d-md-inline">Orders</span>
            </Link>
          </li>
          <li
            className={active === 4 ? "active nav-item py-3" : "nav-item py-3"}
            onClick={(e) => setActive(4)}
          >
            <span className="p-3 text-center text-md-start">
              <i className="bi bi-grid me-3 fs-5"></i>
              <span className="d-none d-md-inline">Reports</span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-white mt-2" />
        <div className="nav-item p-2">
          <a href="#" className="p-1 text-decoration-none">
            <i className="bi bi-person-circle me-3 "></i>
            <span className="">Admin</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
