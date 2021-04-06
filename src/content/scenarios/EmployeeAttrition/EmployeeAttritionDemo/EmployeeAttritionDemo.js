import React, { Component } from 'react';
import {
    ClickableTile,
    Breadcrumb,
    BreadcrumbItem
} from 'carbon-components-react';

class EmployeeAttritionDemo extends Component {
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
                        <h2>Demo It: Employee Attrition</h2>
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col">
                        <p>
                            Follow the instructions below to register for access to a Cloud Pak for Data
                            cluster that has been pre-loaded with the Employee Attrition use case. Using
                            the provided scripts, you can demo the use case to clients.
                        </p>
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col-lg-4">
                        <ClickableTile href={`#${this.props.match.url}/collect`}>
                            <h4>Collect</h4>
                            <hr />
                            <p>
                                Cognos Analytics, dashboards, database connections.
                            </p>
                        </ClickableTile>
                    </div>
                    <div className="bx--col-lg-4">
                        <ClickableTile href={`#${this.props.match.url}/organize`}>
                            <h4>Organize</h4>
                            <hr />
                            <p>
                                Data refinery, roles, permissions, etc.
                            </p>
                        </ClickableTile>
                    </div>
                    <div className="bx--col-lg-4">
                        <ClickableTile href={`#${this.props.match.url}/analyze-monitor`}>
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

export default EmployeeAttritionDemo;