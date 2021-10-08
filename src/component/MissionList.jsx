import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMission } from "../store/actions/missionAction";

export const MissionList = () => {
  const { missions, loader } = useSelector((state) => state.mission);
  //console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMission());
  }, []);
  return (
    <>
      {!loader ? (
        <div className="container">
          <div className="row">
            {missions?.map((item) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                  <div className="card" key={item.id}>
                    <div className="card-body">
                      <img
                        src={item.links.mission_patch_small}
                        class="card-img-top"
                        alt="..."
                      />
                      <h5 className="card-title">{item.mission_name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.rocket.rocket_name}
                      </h6>
                      <h6 className="card-subtitle mb-2 text-muted">
                        launch Date:{item.launch_date_local}
                      </h6>

                      <h6 className="card-subtitle mb-2 text-muted">
                        launch year:{item.launch_year}
                      </h6>

                      {/* <p className="card-text">
                      {item.details
                        ? item.details
                        : "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"}
                    </p> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      ;
    </>
  );
};
