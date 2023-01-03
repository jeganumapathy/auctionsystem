import React, { useState } from "react";
import { useNavigate } from "react-router";


function CreateAuctionItem() {
    const [form, setForm] = useState({
        item_Name: "",
        item_Description: "",
        item_Photo: "",
        item_Status: "",
        item_Intial_bid_Value: "",
        item_Current_Bid_Value: "",
        item_Final_BidValue: "",
        item_StartDate: "",
        item_EndDate: "",
        item_Review: "",
        item_TotalBids: "",
        item_Favorites: "",
        item_Instrucion: ""
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newItem = { ...form };

        await fetch("http://localhost:5000/auction/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({
            item_Name: "",
            item_Description: "",
            item_Photo: "",
            item_Status: "",
            item_Intial_bid_Value: "",
            item_Current_Bid_Value: "",
            item_Final_BidValue: "",
            item_StartDate: "",
            item_EndDate: "",
            item_Review: "",
            item_TotalBids: "",
            item_Favorites: "",
            item_Instrucion: ""
        });
        navigate("/Home");
        window.location.reload(false);
    }

    return (
        <div>
            <h3>Create New Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.item_Name}
                        onChange={(e) => updateForm({ item_Name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_Description}
                        onChange={(e) => updateForm({ item_Description: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_Photo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_Photo}
                        onChange={(e) => updateForm({ item_Photo: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_Status</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_Status}
                        onChange={(e) => updateForm({ item_Status: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_Intial_bid_Value</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_Intial_bid_Value}
                        onChange={(e) => updateForm({ item_Intial_bid_Value: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_Current_Bid_Value</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_Current_Bid_Value}
                        onChange={(e) => updateForm({ item_Current_Bid_Value: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="position">item_Final_BidValue</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_Final_BidValue}
                        onChange={(e) => updateForm({ item_Final_BidValue: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_StartDate</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_StartDate}
                        onChange={(e) => updateForm({ item_StartDate: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_EndDate</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_EndDate}
                        onChange={(e) => updateForm({ item_EndDate: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_Review</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_Review}
                        onChange={(e) => updateForm({ item_Review: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_TotalBids</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_TotalBids}
                        onChange={(e) => updateForm({ item_TotalBids: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_Favorites</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_Favorites}
                        onChange={(e) => updateForm({ item_Favorites: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="position">item_Instrucion</label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        value={form.item_Instrucion}
                        onChange={(e) => updateForm({ item_Instrucion: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create person"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default CreateAuctionItem