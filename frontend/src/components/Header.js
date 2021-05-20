import React, { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { UserContext } from '../context';

const Header = () => {
  const { user, userTypes, setUser } = useContext(UserContext);
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
            <LinkContainer to="submit">
              <Nav.Link>Suggest an Article</Nav.Link>
            </LinkContainer>
            {user === 'Moderator' && (
              <LinkContainer to="moderate">
                <Nav.Link>Moderate Articles</Nav.Link>
              </LinkContainer>
            )}
            {user === 'Analyst' && (
              <LinkContainer to="analyst">
                <Nav.Link>Analyse Articles</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          {/* <Nav>
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i> Sign in
              </Nav.Link>
            </LinkContainer>
          </Nav> */}
          <Nav>
            <NavDropdown title={<i className="fas fa-user"> {user}</i>} id="username">
              {userTypes.map((element, index) => (
                <NavDropdown.Item
                  active={user === element}
                  key={index}
                  onClick={() => setUser(element)}
                >
                  {element}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
