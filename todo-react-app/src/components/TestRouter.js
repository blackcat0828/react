import React from 'react';
import {Switch, Redirect, Route } from 'react-router-dom';
import TestA from '../pages/TestA';
import TestB from '../pages/TestB';
import TestC from '../pages/TestC';



const TestRouter = () => {
    return (
        <Switch>
            <Route path="/testA" exact={true} component={TestA} />
            <Route path="/testB" exact={true} component={TestB} />
            <Route path="/testC" exact={true} component={TestC} />
            <Redirect to="/testA" />
        </Switch>
    );
};

export default TestRouter;