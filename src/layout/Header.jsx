import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { missionFilter } from "../store/reducers/missoinReducer";

export const Header = () => {
  const inputRef = useRef("");
  const dispatch = useDispatch();

  const missionFiter = () => {
    dispatch(missionFilter(inputRef.current.value));
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            technext.it
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Last Week
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Last Week
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Last Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Last Year
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control  me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={inputRef}
                onChange={missionFiter}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
