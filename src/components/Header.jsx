import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from '../logo.svg';

const headerData = [{
    id: 0,
    name: 'Home',
    path: '/Home',
}, {
    id: 1,
    name: 'Auction',
    path: '/Auctions',
}, {
    id: 2,
    name: 'Pricing',
    path: '/Pricing',
}, {
    id: 3,
    name: 'FAQs',
    path: '/FAQ',
}, {
    id: 4,
    name: 'About',
    path: '/About',
}];



function Header() {
    const listItems = headerData.map(data =>
        <li key={data.id.toString()}> <Link to={data.path} className="nav-link px-2 link-dark">{data.name}</Link></li>
    );

    return (
        <div>
            <header className="p-1 text-bg-light">
                <div className="container">
                    <ul className="nav col-12 col-md-auto mb-3 justify-content-center mb-md-1">
                        <img src={logo} className="App-logo" alt="logo" />
                        {listItems}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;