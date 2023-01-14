import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/bgimage.jpg";
import logo from "../images/HomeLogo.png";
import { ConnectButton, Icon, Select, DatePicker, Input, Button} from "web3uikit";
import { useState } from "react";


const Home = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);

  return (
    <>
      <div className = "container" style = {{ backgroundImage : `url( ${bg} )` }}>
        <div className = "containerGradient"></div>
      </div>
      <div className="topBanner">
        <div>
          <img className="logo" src = {logo} alt = "logo"></img>
        </div>
        <div className="tabs">
          <div className="selected">Places to stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrcontainers">
          <ConnectButton/>
        </div>
      </div>
      <div className="tabContent">
        <div className="searchFields">
        <div className="inputs">
            Location
            <Select 
              defaultOptionIndex={0}
              onChange = {(data) => setDestination(data.label)}
              options = {[ 
                { 
                  id: "SEL",
                  label: "Please Select"
                },
                { 
                  id: "MUM",
                  label: "Mumbai"
                },
                { 
                  id: "KAR",
                  label: "Karnataka"
                },
                { 
                  id: "GOA",
                  label: "Goa"
                },
                { 
                  id: "JPR",
                  label: "Jaipur"
                },
                
              ]}
            />
        </div>
        <div className="vl"/>
        <div className="inputs">
            Check In
            <DatePicker
                 id = "checkIn"
                 onChange={(event) => setCheckIn(event.date)}
            />
        </div>
        <div className="vl"/>
        <div className="inputs">
            Check Out     
            <DatePicker
                 id = "checkOut"
                 onChange={(event) => setCheckOut(event.date)}
            />     
        </div>
        <div className="vl"/>
        <div className="inputs">
            Guests
            <Input
                  value = {2}
                  name = "AddGuests"
                  type = "number"
                  onChange={(event) => setGuests(Number(event.target.value))}
            />
        </div>
        <Link to = {"/rentals"} state = {{
          destination: destination,
          checkIn: checkIn,
          checkOut: checkOut,
          guests: guests
        }}>
        <div className="searchButton">
          <Icon fill = "#ffffff" size = {24} svg = "search" />
        </div>
        </Link>
        </div>
      </div>
      <div className="randomLocation">
        <div className="title">Feel Adventurous</div>
        <div className="text">
          Let us decide and discover new places to stay, live, work or just relax.
        </div>
        <Button
            text = "Explore a location"
            onClick={() => console.log(checkOut)}
        />
      </div>
    </>
  );
};

export default Home;
