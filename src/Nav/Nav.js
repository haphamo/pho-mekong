import React, { useState } from 'react';
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
	DropdownItem
} from 'reactstrap';

const Menu = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Pho Mekong</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Menu
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>Popular Items</DropdownItem>
								<DropdownItem>Full Menu</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<NavLink href="/">Contact Us</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Menu;
