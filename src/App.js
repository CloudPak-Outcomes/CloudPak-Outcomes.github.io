import { Content } from 'carbon-components-react';
import React from 'react';
import './app.scss';
import OutcomesHeader from "./components/OutcomesHeader";
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/pages/LandingPage';
import EmployeeAttrition from './content/scenarios/EmployeeAttrition';
import EmployeeAttritionBuild from './content/scenarios/EmployeeAttrition/EmployeeAttritionBuild';
import DemoPage from './content/pages/DemoPage';
import EmployeeAttritionDemo from './content/scenarios/EmployeeAttrition/EmployeeAttritionDemo';

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
                    <div className="bx--col-lg-12">
                        <Content>
                            <Switch>
                                <Route exact path="/" component={LandingPage} />
                                <Route exact path="/employee-attrition" component={EmployeeAttrition} />
                                <Route exact path="/employee-attrition/build-it" component={EmployeeAttritionBuild} />
                                <Route path="/employee-attrition/build-it/:demo" component={DemoPage} />
                                <Route exact path="/employee-attrition/demo-it" component={EmployeeAttritionDemo} />
                                <Route path="/employee-attrition/demo-it/:demo" component={DemoPage} />
                            </Switch>
                        </Content>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;

