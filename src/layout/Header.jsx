import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { missionSearch } from "../store/reducers/missoinReducer";
import { filterStatus } from "../store/reducers/missoinReducer";

export const Header = () => {
  const inputRef = useRef("");
  const { missionsContainer } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  const missionFiter = () => {
    dispatch(missionSearch(inputRef.current.value));
  };
  const failure = () => {
    const mission = missionsContainer?.filter(
      (item) => item.launch_success === false
    );
    dispatch(filterStatus(mission));
  };
  const success = () => {
    const mission = missionsContainer?.filter(
      (item) => item.launch_success === true
    );
    dispatch(filterStatus(mission));
  };
  // const success = () => {
  //   const mission = missions?.filter((item) => {
  //     if (item.launch_success === true) {
  //       return {
  //         ...missions,
  //         missions: mission,
  //       };
  //     } else return missions;
  //   });

  // };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light top-fixed">
        <div className="container">
          <a className="navbar-brand">spacex</a>
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
                    <a className="dropdown-item">Last Week</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Last Month</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Last Year</a>
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
                    <a className="dropdown-item" onClick={failure}>
                      Failure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={success}>
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
