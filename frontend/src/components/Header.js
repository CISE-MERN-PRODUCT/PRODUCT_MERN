import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand href="#home">SEEDS</Navbar.Brand>
					</LinkContainer>
					<Nav className="ml-auto mr-4">
						<Nav.Link href="/All">All Articles</Nav.Link>
						<Nav.Link href="#features">Suggest an Article</Nav.Link>
					</Nav>
					<Nav>
						<LinkContainer to="/login">
							<Button variant="outline-light">Log In</Button>
						</LinkContainer>

						{/* FOR LOGGED IN USERS  */}
						{/* <NavDropdown title={<i className="fas fa-user" />} id="username">
							<LinkContainer to="/profile">
								<NavDropdown.Item>Profile</NavDropdown.Item>
							</LinkContainer>
							<NavDropdown.Item>Logout</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
