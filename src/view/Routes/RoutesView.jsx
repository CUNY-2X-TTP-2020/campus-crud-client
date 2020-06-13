import React from "react";
import { Switch, Route } from "react-router-dom";

import { AllCampusesContainer } from "../Campus";

const RoutesView = () =>
{
    return (
        <Switch>
            <Route exact path="/" component={AllCampusesContainer} />
            <Route exact path="/campuses" component={AllCampusesContainer} />
        </Switch>
    );
};

export default RoutesView;