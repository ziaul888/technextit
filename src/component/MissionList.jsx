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
      <div className="container">
        <div className="row">
          {missions?.map((item) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                <div className="card" key={item.id}>
                  <div className="card-body">
                    <h5 className="card-title">{item.mission_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.rocket.rocket_name}
                    </h6>

                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link"></a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
};
