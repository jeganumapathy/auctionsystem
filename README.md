# Business Requirement


**Design:**

User's can post any item for auction/bidding at any time
Bidders can bid on any existing item any number of times
10M new auction items are added everyday & 100M new bids come in every day
User wins an item if there are no higher bids in the next 1hour
User has to pay for the item within 10 mins of winning the item
User's can only bid for 1 count of an item at a time.
Example: If there are 10 cars in the system, user's can only bid on 1 car at a time.
Functional Requirements:

Users should be able to put items up for auction
Bidder's should be able to search for items they are interested in.
Bidders should be able to bid on items they are interestes in.
Non Functional Requirements

**Low Latency**
High Availability
Highly consistent
The bidding part should be highly consistent. Bidders shouldn't be able to bid on unavailable items
New items can take some time before they become available for bidders to bid upon

**Estimation:**

Read heavy traffic
Traffic:
10M new items added every day
100M requests to bid on these items
Storage:
10M new items/objects each day. If each objects needs ~1KB of space to be stored then it would take 10M * 1KB = 10GB of data each day
API:

Users who want to list new items for auction:
putItem(string userId, string itemCategory, int totalQuantity, string description)
POST /api/v1/bid?
JSON: {userId: "", itemCategory: "", totalQuantity: "", description:""}
Users who want to bid for an item:
bidItem(string userId, string itemId, int quantity, int maxBid}
POST /api/v1/bid?
JSON {userId: "", itemId: "", totalQuantity: "", maxBid: ""}
** High Level Design: **

Item Ingestion Arch

U-1, U-2, U-n are the users who are posting items for auction





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
