import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";

import { useLocation, useNavigate } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import AuthContext from "../AuthContext";
export const Navbar_component = () => {
  let expand = "sm";
  const navigate = useNavigate();
  const location = useLocation();
  let url_path = location.pathname;
  const [expanded, setExpanded] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  let { user, user_details, logoutUser } = useContext(AuthContext);

  if (url_path === "/signup" || url_path === "/login") {
    return <div></div>;
  }
  return (
    <Navbar
      key={expand}
      // bg="light"
      expand={expand}
      expanded={expanded}
      className=" navbar_bg"
      style={{ backgroundColor: "#e16680" }}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="nav_title_items">
          <p
            className="nav_title"
            onClick={() => {
              navigate("/");
            }}
          >
            Metaverse this is test
          </p>
          <div className="user_and_cart_icon">
            <p className="nav_username">
              {" "}
              hello {user === null ? "user" : user_details?.name}{" "}
            </p>
            <div
              className="cart_icon_and_item"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              <ShoppingBasketIcon className="cart_icon" />
              <span className="cart_itemcount">{basket?.length}</span>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls={`offcanvasNavbar-expand-${expand}`}
        />

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          style={{ backgroundColor: "#d9abb5" }}
        >
          <Offcanvas.Header
            onClick={() => {
              setExpanded(false);
            }}
            closeButton
          >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Metaverse
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                  setExpanded(false);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link href="#action2">Orders</Nav.Link>

              {user ? (
                <Nav.Link
                  onClick={() => {
                    logoutUser();
                    setExpanded(false);
                  }}
                >
                  {" "}
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => {
                    navigate("/login");
                    setExpanded(false);
                  }}
                >
                  {" "}
                  Sign in
                </Nav.Link>
              )}

              <NavDropdown
                title="Categoires"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">T-shirts</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Mug</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Painting</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                onClick={() => {
                  navigate("/upload");
                  setExpanded(false);
                }}
              >
                Upload
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  navigate("/about");
                  setExpanded(false);
                }}
              >
                About us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Form className="d-flex search_bar">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};
