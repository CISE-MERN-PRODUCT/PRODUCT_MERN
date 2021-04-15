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
						<LinkContainer to="allArticles">
							<Nav.Link>All Articles</Nav.Link>
						</LinkContainer>

						<LinkContainer to="suggest">
							<Nav.Link>Suggest an Article</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav>
						<LinkContainer to="/login">
							<Nav.Link>
								<i className="fas fa-user"></i> Sign in
							</Nav.Link>
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
