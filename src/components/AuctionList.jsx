import React, { useEffect, useState, useMemo } from "react";
import Pagination from '../components/Pagination';
import { Link, useNavigate } from "react-router-dom";
import PlaceBidUI from "./PalaceBidItem";
const PAGE_LIMIT = 20;
let PageSize = 3;

const Record = (props) => (
  <tr>
    <td>{props.record.item_Name}</td>
    <td>{props.record.item_Description}</td>
    <td>{props.record.item_Photo}</td>
    <td>{props.record.item_Status}</td>
    <td>{props.record.item_Intial_bid_Value}</td>
    <td>{JSON.stringify(props.record.item_Current_Bid_Value)}</td>
    <td>{props.record.item_Final_BidValue}</td>
    <td>{props.record.item_StartDate}</td>
    <td>{props.record.item_EndDate}</td>
    <td>{props.record.item_Review}</td>
    <td>{props.record.item_TotalBids}</td>
    <td>{props.record.item_Favorites}</td>
    <td>{props.record.item_Instrucion}</td>
    <td>
      <PlaceBidUI data={props.record}></PlaceBidUI>
    </td>
    <td>
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
  var [pageSkip, setPageSkip] = useState(0);
  var [pageLimit, setPageLimit] = useState(PAGE_LIMIT);
  
  const [records, setRecords] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  // This method fetches the records from the database.
  async function getRecords() {
    let params = {
      "limit": pageLimit,
      "skip": pageSkip
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

  useEffect(() => {
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

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(records.length / recordsPerPage)

  function itemList() {
    return currentRecords.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
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
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </>
  );
}
