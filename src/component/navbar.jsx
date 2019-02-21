import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <span class="badge badge-danger">{this.props.totalCounters}</span>
            </nav>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;
