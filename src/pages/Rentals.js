import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import logo from "../images/abcde.png";
import { Button, ConnectButton, Icon } from "web3uikit";
import RentalsMap from "../components/RentalsMap";
import { useState } from "react";
import Popup from '../components/Popup';
import "../components/Popup.css"; 
// Edited new
import {useMoralis, useWeb3ExecuteFunction } from "react-moralis" ;

const Rentals = () => {

  const {state: searchFilters} = useLocation();

  const [highLight, setHighLight] = useState();

  // Edited by M
  const [buttonPopup, setButtonPopup] = useState(false);
  
  // const { Moralis, account } = useMoralis();



  // 
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
        pricePerDay: "2",
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
        pricePerDay: "1",
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
        pricePerDay: "2",
      },
    },
        {
      attributes: {
        city: "Goa",
        unoDescription: "4 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Cottages • Kitchen • Living Area • Swimming Pool • Scenic view",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/212689457-ac99cf20-dcb6-4aac-b8fe-6f8c8b4af8c8.PNG",
          lat: "14.522178876810353",
          long: "74.32162903913934",
        // 14.522178876810353, 74.32162903913934
        name: "SwaSwara Rooms and Suites",
        pricePerDay: "2",
      },
    },
        {
      attributes: {
        city: "Goa",
        unoDescription: "2 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Complementary Breakfast • Living Area • Scenic view ",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/212689387-011c4cac-a4b9-4ea7-b68f-557212397b5e.PNG",
          lat: "15.03957993235876",
          long: "73.98955101266905",
        // 15.03957993235876, 73.98955101266905
        name: "Cinnamon Agoda Suites",
        pricePerDay: "1",
      },
    },
        {
      attributes: {
        city: "Goa",
        unoDescription: "3 Guests • 3 Beds • 1 Room",
        dosDescription: "Wifi • Furnished Cottages • Living Area • Spa • Sea view",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/212689377-828f06a1-17aa-46f2-af82-72b7914b9f23.PNG",
          lat: "15.105834693715021",
          long: "73.92774552616052",
        // 15.105834693715021, 73.92774552616052
        name: "CaboSerai Hotel",
        pricePerDay: "2",
      },
    },
        {
      attributes: {
        city: "Karnataka",
        unoDescription: "2 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Complementary Breakfast • Living Area • Spa • Family Pool",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/212689409-eacc40aa-31de-41c7-8494-b2e182707652.PNG",
          lat: "12.97379295094145",
          long: "77.61844539157518",
        // 12.97379295094145, 77.61844539157518
        name: "Oberoi Hotel",
        pricePerDay: "1",
      },
    },
        {
      attributes: {
        city: "Karnataka",
        unoDescription: "3 Guests • 3 Beds • 1 Room",
        dosDescription: "Wifi • Living Area • Swimming pool",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/212689448-59fb6b59-c42b-4380-a852-3b9dea11d1ae.PNG",
          lat: "12.968340642764753",
          long: "77.60126558195236",
        // 12.968340642764753, 77.60126558195236
        name: "RitzCarlton",
        pricePerDay: "2",
      },
    },
        {
      attributes: {
        city: "Karnataka",
        unoDescription: "1 Guests • 1 Beds • 1 Rooms",
        dosDescription: "Wifi • Complementary Breakfast • Living Area • Spa",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/212689400-f07c92cb-189d-4673-b177-8d9429f9cc62.PNG",
          lat: "12.97243497598094",
          long: "77.59509421264411",
        // 12.97243497598094, 77.59509421264411
        name: "J. W. Marriot",
        pricePerDay: "1",
      },
    },
        {
      attributes: {
        city: "Jaipur",
        unoDescription: "2 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Living Area • Swimming pool • Scenic view",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/212689420-b33ae1ee-d395-4184-aa3b-e4bb04da1cdd.PNG",
          lat: "26.87606449290368",
          long: "75.88384512822567",
        // 26.87606449290368, 75.88384512822567
        name: "Oberoi_RajVilas",
        pricePerDay: "1",
      },
    },
        {
      attributes: {
        city: "Jaipur",
        unoDescription: "3 Guests • 3 Beds • 1 Rooms",
        dosDescription: "Wifi • Complementary Breakfast • Living Area • Spa • Sea view",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/212689393-d99c2401-4d45-43c5-89bc-11b340052903.PNG",
          lat: "27.03097646087964",
          long: "75.88991991288327",
        // 27.03097646087964, 75.88991991288327
        name: "Fairmont",
        pricePerDay: "2",
      },
    },
        {
      attributes: {
        city: "Jaipur",
        unoDescription: "4 Guests • 2 Beds • 1 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area • Scenic view",
        imgUrl:
          "https://user-images.githubusercontent.com/79357290/212689430-1103d3c8-a4c8-4cbf-ad49-aee67bb04086.PNG",
          lat: "26.898306213261485",
          long: "75.80824635706259",
        // 26.898306213261485, 75.80824635706259
        name: "Rambagh Palace",
        pricePerDay: "2",
      },
    },
];

  let cords = [];
  rentalsList.forEach((e, i) => {
    cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
  });


  // ..................................................

  //Edited by M







  //..................................

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
                      {/* <Button text = "Explore"/> */}
                        
                      {/* Edited by M */}
                        <button className="close-btn-2" onClick={ ()=> setButtonPopup(true)}>Stay Here</button>
                        

                      {/* ............ */}
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
           setHighLight = {setHighLight}  
        </div>
      </div>
      {/* BY my /.............*/}
      <div className="m">
      <Popup trigger={ buttonPopup } setTrigger={setButtonPopup}>

           Transaction in Progress<br></br>
           Account ID: 0x6ac8782375EEe5a9D5A931d32cBbf18bd2Df3Af0 <br></br>
           Check Logs for information!!
        
        </Popup>
        </div>
        {/* BY me.................................... */}
    </>
  );
};

export default Rentals;
