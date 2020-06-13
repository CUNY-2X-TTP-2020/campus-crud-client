import React from "react";
import { Switch, Route } from "react-router-dom";

import { AllCampusesContainer } from "../Campus";
import { AllStudentsContainer } from "../Student";

const RoutesView = () =>
{
    return (
        <Switch>
            <Route exact path="/" component={AllCampusesContainer} />
            <Route exact path="/campuses" component={AllCampusesContainer} />
            <Route exact path="/students" component={AllStudentsContainer} />
        </Switch>
    );
};

export default RoutesView;