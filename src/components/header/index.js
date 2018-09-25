import React from 'react';
import './header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const Header = props => (
        <div className="header hd-bg" id="header">
        <img src="{require('../src/logo.jpg')}" style={{ width: '10px', height: '10pxnpm ' }}/>
            <a href="javascript:void(0)" className="header-brand">Dot Net NewsLetter</a>
            <div style={{marginLeft: 'auto', marginRight: '5rem'}}>
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
)


export default Header;