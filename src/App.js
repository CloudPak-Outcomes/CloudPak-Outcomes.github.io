import { Content } from 'carbon-components-react';
import React from 'react';
import './app.scss';
import OutcomesHeader from "./components/OutcomesHeader";
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/pages/LandingPage';
import OverviewPage from './content/pages/OverviewPage';
import GettingStartedPage from "./content/pages/GettingStartedPage";
import SalesDemosPage from "./content/pages/SalesDemosPage";
import TechnicalLabsPage from "./content/pages/TechnicalLabsPage";
import EmployeeAttrition from './content/scenarios/EmployeeAttrition';
import EmployeeAttritionBuild from './content/scenarios/EmployeeAttrition/EmployeeAttritionBuild';
import DemoPage from './content/pages/DemoPage';
import EmployeeAttritionDemo from './content/scenarios/EmployeeAttrition/EmployeeAttritionDemo';
import MortgageDefaultDemo from "./content/scenarios/MortgageDefault/MortgageDefaultDemo";
import ScrollToTop from "./ScrollToTop";

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
                            <ScrollToTop />
                            <Switch>
                                <Route exact path="/" component={LandingPage} />
                                <Route exact path="/overview" component={OverviewPage} />
                                <Route exact path="/getting-started" component={GettingStartedPage} />
                                <Route exact path="/sales-demos" component={SalesDemosPage} />
                                <Route exact path="/technical-labs" component={TechnicalLabsPage} />
                                <Route exact path="/employee-attrition" component={EmployeeAttrition} />
                                <Route exact path="/technical-labs/employee-attrition" component={EmployeeAttritionBuild} />
                                <Route path="/technical-labs/employee-attrition/:demo" component={DemoPage} />
                                <Route exact path="/sales-demos/employee-attrition" component={EmployeeAttritionDemo} />
                                <Route path="/sales-demos/employee-attrition/:demo" component={DemoPage} />
                                <Route exact path="/sales-demos/mortgage-default" component={MortgageDefaultDemo} />
                                <Route path="/sales-demos/mortgage-default/:demo" component={DemoPage} />
                            </Switch>
                        </Content>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;

