import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/Store";

const SearchedResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  return (
    <>
      {context.searchedResult.length ? (
        <div className="mainDivTv">
          {context.searchedResult.map((i, index) => {
            return (
              <div
                className="cardMain"
                key={index}
                onClick={() => {
                  navigate("/details", { state: i.show });
                }}
              >
                <div>
                  <img src={i?.show.image?.medium} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          No data found!
        </div>
      )}
    </>
  );
};

export default SearchedResult;
