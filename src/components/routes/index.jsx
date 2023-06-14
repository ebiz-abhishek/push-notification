import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterLayout from '../MasterLayout/Main';
import routes from './routes';


const RoutePage = () => {
    return (
        <Router>
            <Routes>
                {routes.map(({ path, auth, component: Component, permission, layout }, i) => {
                    return <Route path="/"
                        element={
                            <MasterLayout
                                ptitle={Component.props.title}
                                permission={permission}
                                auth={auth} />
                        }
                        key={i}>
                        <Route exact path={path} element={Component} />
                    </Route>
                })}


            </Routes>
        </Router>
    )
}
export default RoutePage;