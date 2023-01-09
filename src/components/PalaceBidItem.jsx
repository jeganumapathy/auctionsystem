import React from "react";
import { Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from "react-router";


const PlaceBidUI = (props) => {
    const [bid, setBid] = useState("");
    const navigate = useNavigate();

    // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    const d = new Date();

    const nameChangeHandler = (e) => {
        setBid(e.target.value);
    };

    // form submit handler
    const onSubmit = async (e) => {
        e.preventDefault();
        // reset the form after using the value
        var temp = props.data.item_Current_Bid_Value;
        var ind = {
            value: bid,
            time: d.getTime(),
            userName: ""
        };
        const arr = [];
        arr.push(ind);
        arr.push(temp);
        props.data.item_Current_Bid_Value = arr;
        // This will send a post request to update the data in the database.
        await fetch(`http://localhost:5000/auction/update/${props.data._id}`, {
            method: "POST",
            body: JSON.stringify(props.data),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        setBid("");
        navigate("/Auctions");
        window.location.reload(false);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <p>Place your bid here</p>
                <input
                    id="bid"
                    value={bid}
                    onChange={nameChangeHandler}
                    type="number"
                />
                <Button type="submit" style={{ marginTop: 10, overflowX: 'auto' }}>Submit</Button>
            </form>
        </div>
    );
}
export default PlaceBidUI;