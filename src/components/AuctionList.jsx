import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.item_name}</td>
   <td>{props.record.item_Description}</td>
 </tr>
);
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

 
export default function AuctionList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/auction/`);
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
 }, []);
 
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
 
 // This following section will display the table with the records of individuals.style={{overflowX : 'auto',fontSize: '14px'}}
 return (
  <>
  <h3>Record List</h3>
   <div className="table-responsive">
     <table className="table table-striped" style={{ marginTop: 20,overflowX : 'auto',fontSize: '14px' }}>
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
   </>
 );
}
