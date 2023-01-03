import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavLink } from "react-bootstrap";
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
        <NavLink key={data.id} as={Link} to={data.path}>{data.name}</NavLink>
    );

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand>
                    <img src={logo} width="40px" height="40px" />{' '}
                    BDAuctions
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav>
                        {listItems}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}

export default Header;