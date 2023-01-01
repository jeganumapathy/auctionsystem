import React from "react";

const ItemDetails = () => {
  return (
    <div className="p-3" >
      <form>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Item Name</span>
            <input type="text" className="form-control" aria-label="Name" aria-describedby="basic-addon1" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Auction Date</span>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Details</span>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Price</span>
            <input type="number" className="form-control" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Picture</span>
            <input type="file" className="form-control" placeholder="Image" aria-label="Image" aria-describedby="basic-addon1" />
          </div>

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
export default ItemDetails;
