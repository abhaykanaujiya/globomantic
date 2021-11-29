import React from "react";
export default function HouseData(props) {
  const housedata = props.house;

  return (
    <>
      {housedata.map((house) => (
        <div className="card-body">
          <h5 className="card-countryName">{house.country}</h5>
          <h4 className="card-countryAddress">{house.address}</h4>
          <img
            src={`../../images/${house.photo}.jpeg`}
            className="card-img-top"
            alt="image"
            height="200"
            width="200"
          />
          <div>
            <h6>Price: {house.price}</h6>
            <p className="card-text">{house.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
