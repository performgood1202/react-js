import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Nav, Navbar, NavDropdown, NavItem, Image, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({});

const Login = (props) => {
	
	return (
      	<div className="header-main">
			<Navbar bg="light" expand="lg">
				<Container>
					<Row className="align-items-center">	
						Login page
					</Row>
				</Container>
			</Navbar>
      		
      	</div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);