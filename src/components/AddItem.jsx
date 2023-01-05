import React from "react";
import { Button } from "@mui/material";
import { useState } from 'react';
import ItemDetails from '../pages/ItemDetails';


function AddItem() {
  const [buttonsOnCanvos, setButtonsOnCanvos] = useState([]);

  // Closure function Handle Add Item Click
  function handleClick() {
    setButtonsOnCanvos([...buttonsOnCanvos, <ItemDetails  className="ms-1" />]);
  }

  return (
    <div>
      <Button onClick={handleClick}>Add an Item</Button>
      <div>{buttonsOnCanvos}</div>
    </div>
  );
}
export default AddItem;
