import React, {Component} from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand} from 'reactstrap';
import {Link} from "react-router-dom"

export default class TopBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Link to='/'>
                        <NavbarBrand>Readable</NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                </Navbar>
            </div>
        );
    }
}
