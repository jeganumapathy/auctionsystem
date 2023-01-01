/* eslint-disable */

import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//LIFE CYCLE Component loading

function arrayLength() {
  let array = ["a"];
  var length = array.length;
  if (length >= 2) {
    console.log(array[length - 2]);
  }
  
  console.log(3+"3");
  console.log(3-"3");
}

function Auctions() {
  let user = { name: "dev" }
  const [counter, setCounter] = useState(0);
  /** Component did mount */
  useEffect(() => {
    arrayLength();

    console.log('DID Mount')
  })
  /** Component update */

  useEffect(() => {
    console.log('update')
  }, [user]);
  /** Component unmount */
  useEffect(() => {
    return (() => {
      console.log('Ummoutn')
    });
  }, [])
  function onClick() {
    setCounter(1);
  }

  return (
    <div className="App">
      Hello Auctions
    </div>
  );
}

export default Auctions;
