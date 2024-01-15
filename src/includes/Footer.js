import React from "react";
import { connect } from "react-redux";
import { Container, Image, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({})

const Footer = (props) => {
	
	return (
      	<footer className="footer">
      		<Container>
				<Row className="align-items-center">
					footer
				</Row>
				<p className="text-center copyright-txt">Copyright 2022 P&H Creative Oy. All rights are reserved.</p>
			</Container>
      	</footer>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Footer);