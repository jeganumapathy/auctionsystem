/* eslint-disable */

import { Button, ButtonBase, Rating } from "@mui/material";
import { findByAltText } from "@testing-library/react";
import { useEffect, useState } from "react";
import AuctionList from "../components/AuctionList";
import CreateAuctionPage from "./CreateAuctionPage";

//LIFE CYCLE Component loading

function arrayLength() {
  let array = ["a"];
  var length = array.length;
  if (length >= 2) {
    console.log(array[length - 2]);
  }

  console.log(3 + "3");
  console.log(3 - "3");
}


function Auctions() {

  const [counter, setBitCounter] = useState(0);
  const [items, setAuctionItems] = useState([]);
  const [buttonsOnCanvos, setButtonsOnCanvos] = useState([]);

  //increase counter
  const increase = () => {
    setBitCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setBitCounter(count => count - 1);
  };

  //reset counter 
  const reset = () => {
    setBitCounter(0)
  }


  const about_two = {
    backgroundColor: "#eff0ee",
    fontFamily: "Arial",
    padding: "20px 0"
  };


  const itemDetails = [{
    item_id: 1,
    item_status: "open",
    item_name: "House",
    item_Description: "Some quick example text to build on the cardtitle and make up the bulk of the card's content.",
    item_intial_value: 10,
    item_start_date: "",
    item_end_date: "",
    item_final_value: 10
  }];

  // Closure function Handle Add Item Click
  function handleClick() {
    setButtonsOnCanvos([...buttonsOnCanvos, <CreateAuctionPage className="ms-1" />]);
  }


  return (
    <div>
      <h1>Welcome to Auction List</h1>
      <Button onClick={handleClick}>Add an Auction Item</Button>
      <div>{buttonsOnCanvos}</div>
      <div className="row">
        <AuctionList />
      </div>
    </div>
  );
}

export default Auctions;
