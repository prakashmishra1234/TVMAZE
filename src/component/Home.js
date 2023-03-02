import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../api/Instance";
import Header from "../component/Header";
import { AuthContext } from "../store/Store";

const Home = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getTvShow = () => {
    setLoading(true);
    instance
      .get("/shows")
      .then((res) => {
        context.setTvShow(res);
      })
      .catch((err) => {
        console.log(err);
        context.setTvShow([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getTvShow();
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center mt-2">
          <CircularProgress />
        </div>
      ) : (
        <div className="mainDivTv">
          {context.tvShow.length ? (
            <>
              {context.tvShow.map((i, index) => {
                return (
                  <div
                    className="cardMain"
                    key={index}
                    onClick={() => {
                      navigate("/details", { state: i });
                    }}
                  >
                    <div>
                      <img src={i?.image?.medium} />
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              No data found!
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
