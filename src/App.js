import logo from './logo.svg';
import { Button, Content } from 'carbon-components-react';
import React, { Component } from 'react';
import './index.scss';
import './App.css';
import OutcomesHeader from "./components/OutcomesHeader";
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import EmployeeAttrition from './content/EmployeeAttrition';
import EmployeeAttritionBuild from './content/EmployeeAttrition/EmployeeAttritionBuild';

function App() {
    return (
        <div className="App">
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col-lg-12">
                        <OutcomesHeader />
                    </div>
                </div>
                <div className="bx--row bx--row-padding">
                    <div className="bx--offset-lg-2 bx--col-lg-10">
                        <Content>
                            <Switch>
                                <Route exact path="/" component={LandingPage} />
                                <Route exact path="/employee-attrition" component={EmployeeAttrition} />
                                <Route exact path="/employee-attrition/build" component={EmployeeAttritionBuild} />
                            </Switch>
                        </Content>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;

