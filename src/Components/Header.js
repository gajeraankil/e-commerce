import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="images/logo.png" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler shadow-none border-0 order-lg-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <MenuIcon className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close text-reset shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <form className="position-relative d-flex col-12 col-lg-6 m-lg-0 mt-2" onSubmit={(e) => {e.preventDefault()}}>
            <input
              className="form-control shadow-none"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
            <button
              className="position-absolute btn shadow-none border-0 top-0 end-0 bottom-0"
              type="submit"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
