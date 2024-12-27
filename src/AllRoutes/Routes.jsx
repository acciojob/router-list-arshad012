import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Users from "../Pages/Users";
import SingleUser from "../Pages/SingleUser";

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={SingleUser} />
        </Switch>
    );
};

export default AllRoutes;