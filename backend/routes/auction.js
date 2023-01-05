const express = require("express");

// AuctionRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const auctionRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const tableName = "auction";


// This section will help you get a list of all the records.
auctionRoutes.route("/" + tableName).get(function (req, res) {
  let db_connect = dbo.getDb();
  var perPage = 500;
  var page = req.query.page || 1;
  var pageSkip = perPage * page - perPage;
  db_connect
    .collection(tableName)
    .find({}, {limit:perPage, skip:pageSkip})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
auctionRoutes.route("/" + tableName + "/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection(tableName)
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
auctionRoutes.route("/" + tableName + "/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    item_Name: req.body.item_Name,
    item_Description: req.body.item_Description,
    item_Photo: req.body.item_Photo,
    item_Status: req.body.item_Photo,
    item_Intial_bid_Value: req.body.item_Intial_bid_Value,
    item_Current_Bid_Value: req.body.item_Current_Bid_Value,
    item_Final_BidValue: req.body.item_Final_BidValue,
    item_StartDate: req.body.item_StartDate,
    item_EndDate: req.body.item_EndDate,
    item_Review: req.body.item_Review,
    item_TotalBids: req.body.item_TotalBids,
    item_Favorites: req.body.item_Favorites,
    item_Instrucion: req.body.item_Instrucion

  };
  db_connect.collection(tableName).insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
auctionRoutes.route("/"+tableName+"/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      item_Name: req.body.item_Name,
      item_Description: req.body.item_Description,
      item_Photo: req.body.item_Photo,
      item_Status: req.body.item_Photo,
      item_Intial_bid_Value: req.body.item_Intial_bid_Value,
      item_Current_Bid_Value: req.body.item_Current_Bid_Value,
      item_Final_BidValue: req.body.item_Final_BidValue,
      item_StartDate: req.body.item_StartDate,
      item_EndDate: req.body.item_EndDate,
      item_Review: req.body.item_Review,
      item_TotalBids: req.body.item_TotalBids,
      item_Favorites: req.body.item_Favorites,
      item_Instrucion: req.body.item_Instrucion
      },
  };
  db_connect
    .collection(tableName)
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
auctionRoutes.route("/" + tableName + "/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection(tableName).deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = auctionRoutes;
