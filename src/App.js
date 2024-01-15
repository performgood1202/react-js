import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import RouteList from './route/RouteList';

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => ({
});

const AppComponent = (props) => {

  return (
      <div className="main-body">
         <RouteList />
      </div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);