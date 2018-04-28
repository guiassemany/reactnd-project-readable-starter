import React, {Component} from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand} from 'reactstrap';

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
                    <NavbarBrand href="/">Readable</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </Navbar>
            </div>
        );
    }
}
