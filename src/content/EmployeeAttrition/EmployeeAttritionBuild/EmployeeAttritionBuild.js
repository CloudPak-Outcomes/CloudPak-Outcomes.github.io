import React, { Component } from 'react';
import {
    ClickableTile,
    Breadcrumb,
    BreadcrumbItem
} from 'carbon-components-react';

class EmployeeAttritionBuild extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col">
                        <Breadcrumb>
                            <BreadcrumbItem href="/#">Cloud Pak Outcomes</BreadcrumbItem>
                            <BreadcrumbItem href="/#/employee-attrition">Employee Attrition</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Build It: Employee Attrition</h2>
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col">
                        <p>
                            The sections below contain instructions and code samples for you to replicate
                            the Employee Attrition demo environment on a Cloud Pak for Data cluster.
                        </p>
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col-lg-4">
                        <ClickableTile>
                            <h4>Collect</h4>
                            <hr />
                            <p>
                                Cognos Analytics, dashboards, database connections.
                            </p>
                        </ClickableTile>
                    </div>
                    <div className="bx--col-lg-4">
                        <ClickableTile>
                            <h4>Organize</h4>
                            <hr />
                            <p>
                                Data refinery, roles, permissions, etc.
                            </p>
                        </ClickableTile>
                    </div>
                    <div className="bx--col-lg-4">
                        <ClickableTile href="#/employee-attrition/build/analyze-monitor">
                            <h4>Analyze/Monitor</h4>
                            <hr />
                            <p>
                                Deploy an employee attrition model into your environment. With <strong>
                                Watson OpenScale</strong>, identify how changing employment conditions
                                are affecting model accuracy. With <strong>AutoAI</strong> and <strong>
                                Watson Studio</strong>, rapidly prototype a new model and run a
                                head-to-head comparison between the production and challenger models.
                            </p>
                        </ClickableTile>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeAttritionBuild;