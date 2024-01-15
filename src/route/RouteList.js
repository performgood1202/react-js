import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Navigate,useNavigate,useLocation } from "react-router-dom";

import { FrontendLayout } from '../Layouts';
import { baseRoutes } from './routes';



const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const RouteList = (props) => {
    
    return (
        <Fragment>
        <Routes>

            {baseRoutes.map((route, i) => {
                let component = route.component;
                return (
                    <Route
                        key={i}
                        {...route}
                        element={(
                            <FrontendLayout>
                                {component}
                            </FrontendLayout>
                        )}
                    />
                )
            })}
           
        </Routes>
        </Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteList);