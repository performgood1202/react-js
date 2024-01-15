import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Nav, Navbar, NavDropdown, NavItem, Image, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';


const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({});

const Header = (props) => {
	
	return (
      	<div className="header-main">
			<Navbar bg="light" expand="lg">
				<Container>
					<Row className="align-items-center">	
						<Col lg={3} sm={12} className="header-mobile">
							<Nav.Link as={NavLink} to="/" exact="true">
								<Image src={logo} alt='logo' className="logo-img" />
							</Nav.Link>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
						</Col>
						<Col lg={6} sm={4}>
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
								<Nav.Link as={NavLink} to="/login" exact="true">Login</Nav.Link>
							</Navbar.Collapse>
						</Col>
					</Row>
				</Container>
			</Navbar>
      		
      	</div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);