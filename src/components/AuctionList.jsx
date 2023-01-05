import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.item_Name}</td>
    <td>{props.record.item_Description}</td>
    <td>{props.record.item_Photo}</td>
    <td>{props.record.item_Status}</td>
    <td>{props.record.item_Intial_bid_Value}</td>
    <td>{props.record.item_Current_Bid_Value}</td>
    <td>{props.record.item_Final_BidValue}</td>
    <td>{props.record.item_StartDate}</td>
    <td>{props.record.item_EndDate}</td>
    <td>{props.record.item_Review}</td>
    <td>{props.record.item_TotalBids}</td>
    <td>{props.record.item_Favorites}</td>
    <td>{props.record.item_Instrucion}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link">Bid</button>
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);



export default function AuctionList() {
  const PER_PAGE = 10;
  const [records, setRecords] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const offset = currentPage * PER_PAGE;

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      let params = {
        "page": pageCount
      };
      let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');

      let url = 'http://localhost:5000/auction/?' + query;
      const response = await fetch(url);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/auction/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function itemList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }


  // This following section will display the table with the records of individuals.style={{overflowX : 'auto',fontSize: '14px'}}
  return (
    <>
      <div>
        <h3>Record List</h3>
        {records ? (
          <div className="table-responsive" >
            <table className="table table-striped" style={{ marginTop: 20, overflowX: 'auto', fontSize: '14px' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Photo</th>
                  <th>Status</th>
                  <th>Intial Bid Value</th>
                  <th>Current Bid Value</th>
                  <th>Final Bid Value</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Review</th>
                  <th>Total Bids</th>
                  <th>Favorites</th>
                  <th>Instrucion</th>
                </tr>
              </thead>
              <tbody>{itemList()}</tbody>
            </table>
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </>
  );
}
