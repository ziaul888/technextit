import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { missionSearch } from "../store/reducers/missoinReducer";
import { Link } from "react-router-dom";

import { failure } from "../store/actions/missionAction";
import { success } from "../store/actions/missionAction";

export const Header = () => {
  const inputRef = useRef("");
  const { missionsContainer } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  const missionFiter = () => {
    dispatch(missionSearch(inputRef.current.value));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light top-fixed">
        <div className="container">
          <Link className="navbar-brand" to="./">
            spacex
          </Link>
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
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Launch Date
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item"> Week</a>
                  </li>
                  <li>
                    <a className="dropdown-item"> Month</a>
                  </li>
                  <li>
                    <a className="dropdown-item"> Year</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Launch Status
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => dispatch(failure(missionsContainer))}
                    >
                      Failure
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => dispatch(success(missionsContainer))}
                    >
                      Success
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
