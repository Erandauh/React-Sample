import React from 'react';

// State functional component

const NavBar2 = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <span class="badge badge-danger">{totalCounters}</span>
        </nav>
    );
}

export default NavBar2;