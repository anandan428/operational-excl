import React from 'react';
import './header.css';

const Header = props => (
    <header>
        <div className="header" id="header">
            <a href="javascript:void(0)" className="header-brand">Buffer Managment</a>
            <div style={{marginLeft: 'auto', marginRight: '5rem'}}>
                <i class="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
    </header>
)


export default Header;