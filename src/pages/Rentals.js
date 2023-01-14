import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import logo from "../images/logob.jpeg";
import { Button, ConnectButton, Icon } from "web3uikit";
import RentalsMap from "../components/RentalsMap";
import { useState } from "react";

const Rentals = () => {

  const {state: searchFilters} = useLocation();

  const [highLight, setHighLight] = useState();
  const rentalsList =[
    {
      attributes: {
        city: "Mumbai",
        unoDescription: "2 Guests • 2 Beds • 1 Room",
        dosDescription: "Wifi • Living Area • Swimming Pool • Spa • Complementary Breakfast",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/211361371-0584a7ea-9c02-47cb-a5bb-8c056297b81d.PNG",
        lat: "18.921771975614856",
        long: "72.83317763846402",
        // 18.921771975614856, 72.83317763846402
        name: "Hotel Taj Mahal",
        pricePerDay: "3",
      },
    },
    {
      attributes: {
        city: "Mumbai",
        unoDescription: "4 Guests • 2 Beds • 1 Room",
        dosDescription: "Wifi • Kitchen • Living Area • Swimming Pool • Sea view",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/211361410-d7e30a26-332e-49f3-95b0-8340d4a2daf5.PNG",
          lat: "19.10928167842309",
          long: "72.87408220457968",
        // 19.10928167842309, 72.87408220457968
        name: "Leela Hotel & Resorts",
        pricePerDay: "3",
      },
    },
    {
      attributes: {
        city: "Mumbai",
        unoDescription: "2 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area • Spa • Sea view",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/211361445-999a6662-f32d-4253-89ee-8d90fe2f3da0.PNG",
          lat: "18.928035048235934",
          long: "72.82171348152961",
        // 18.928035048235934, 72.82171348152961
        name: "Trident Hotel",
        pricePerDay: "3",
      },
    },
];

  let cords = [];
  rentalsList.forEach((e, i) => {
    cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
  });

  return (
    <>
      <div className="topBanner">
        <div>
          <Link to = "/">
            <img className="logo" src = {logo} alt = "logo"></img>
          </Link>          
        </div>
        <div className="searchReminder">

        <div className="filter">
          {searchFilters.destination}
        </div>
        <div className="vl" />
        <div className="filter">
          {`
            ${searchFilters.checkIn.toLocaleString("default", {month: "short",})}
            ${searchFilters.checkIn.toLocaleString("default", {day: "2-digit",})} 
            -
            ${searchFilters.checkOut.toLocaleString("default", {month: "short",})}
            ${searchFilters.checkOut.toLocaleString("default", {day: "2-digit",})} 
          `}
        </div>
        <div className="vl" />
        <div className="filter">
          {searchFilters.guests} Guest
        </div>
        <div className="searchFiltersIcon">
          <Icon fill = "#ffffff" size ={20} svg = "search" />
        </div>
        </div>
        <div className="lrcontainers">
          <ConnectButton/>
        </div>
      </div> 
      <div className="line"/>  
      <div className="rentalsContent">
        <div className="rentalsContentL">
          Stays Available For Your Destination
          {rentalsList &&
          rentalsList.map((e, i) => { /* , i */
            return(
              <>
                <hr className="line2" />
                <div className = {highLight == i ? "rentalDivH" : "rentalDiv"}>
                  <img className="rentalImg" src = {e.attributes.imgUrl}></img>
                  <div className="rentalInfo">
                    <div className="rentalTitle">{e.attributes.name}</div>
                    <div className="rentalDesc">
                      {e.attributes.unoDescription}
                    </div>
                    <div className="rentalDesc">
                      {e.attributes.dosDescription}
                    </div>
                    <div className="bottomButton">
                      <Button text = "Stay Here" />
                      <div className="price">
                        <Icon fill="#808080" size = {10} svg = "matic" /> 
                        {e.attributes.pricePerDay} / Day
                      </div> 
                    </div>
                  </div>
                </div>
              </>
            );
          })
        }
        </div>
        <div className="rentalsContentR">
          <RentalsMap locations = {cords} setHighLight = {setHighLight}  /> 
          {/* setHighLight = {setHighLight}  */}
        </div>
      </div>
    </>
  );
};

export default Rentals;
