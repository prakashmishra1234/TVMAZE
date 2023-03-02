import React from "react";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "../App.css";
const Details = () => {
  const [rating, setRating] = React.useState(0);
  const location = useLocation();

  React.useEffect(() => {
    setRating(location.state?.rating?.average / 2);
  }, []);

  return (
    <>
      {
        <div className="detailsMain">
          <img src={location.state.image?.medium}></img>
          <div>
            <div className="ratingDiv">
              <p>{`${location.state?.name ?? "N/A"}${" "}(${
                location.state?.rating?.average ?? "N/A"
              })`}</p>
              <div>
                <Rating readonly={true} initialValue={rating} />
              </div>
            </div>
            <div>
              <p>{`${location.state?.premiered ?? "N/A"}${" | "}${
                location.state?.runtime
              } min${" | "}${location.state?.director ?? "N/A"}`}</p>
              <p>Cast: {`${"Jhon Jacob, Hansh Meir"}`}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: location.state?.summary ?? "",
              }}
            />
          </div>
        </div>
      }
    </>
  );
};

export default Details;
