import React from "react";
import { Route, Switch } from 'react-router-dom';
import ItemList from "../Pages/ItemList";
import ItemDetail from "../Pages/ItemDetail";

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ItemList} />
            <Route path="/item/:id" component={ItemDetail} />
        </Switch>
    );
};

export default AllRoutes;