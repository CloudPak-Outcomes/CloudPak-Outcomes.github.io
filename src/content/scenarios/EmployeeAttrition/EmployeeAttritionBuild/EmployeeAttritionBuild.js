import React, { Component } from 'react';
import {
    ClickableTile,
    Breadcrumb,
    BreadcrumbItem
} from 'carbon-components-react';
import {
    Analyze,
    Construct,
    CognosAnalytics
} from "@carbon/pictograms-react";
import '../../../_content-page.scss';

class EmployeeAttritionBuild extends Component {
    render() {
        return (
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col bx--offset-lg-2">
                        <div className="bx--row show-banner">
                            <div className="bx--col">
                                <Breadcrumb className="breadcrumb">
                                    <BreadcrumbItem href="/#">Cloud Pak Outcomes</BreadcrumbItem>
                                    <BreadcrumbItem href="/#/technical-labs">Technical Labs</BreadcrumbItem>
                                </Breadcrumb>
                                <h2 className="content-page__heading">Lab: Employee Attrition</h2>
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
                            <div className="bx--col">
                                <ClickableTile href={`#${this.props.match.url}/analyze-monitor`}>
                                    <div className="bx--row">
                                        <div className="bx--col-lg-2">
                                            <Analyze/>
                                        </div>
                                        <div className="bx--col">
                                            <h4>Analyze/Monitor</h4>
                                            <hr />
                                            <p>
                                                Deploy an employee attrition model into your environment. With <strong>
                                                Watson OpenScale</strong>, identify how changing employment conditions
                                                are affecting model accuracy. With <strong>AutoAI</strong> and <strong>
                                                Watson Studio</strong>, rapidly prototype a new model and run a
                                                head-to-head comparison between the production and challenger models.
                                            </p>
                                        </div>
                                    </div>
                                </ClickableTile>
                            </div>
                        </div>
                        <div className="bx--row">
                            <div className="bx--col">
                                <ClickableTile href={`#${this.props.match.url}/collect`}>
                                    <div className="bx--row">
                                        <div className="bx--col-lg-2">
                                            <CognosAnalytics/>
                                        </div>
                                        <div className="bx--col">
                                            <h4>Collect</h4>
                                            <hr />
                                            <p>
                                                Cognos Analytics, dashboards, database connections.
                                            </p>
                                        </div>
                                    </div>
                                </ClickableTile>
                            </div>
                        </div>
                        <div className="bx--row">
                            <div className="bx--col">
                                <ClickableTile href={`#${this.props.match.url}/organize`}>
                                    <div className="bx--row">
                                        <div className="bx--col-lg-2">
                                            <Construct/>
                                        </div>
                                        <div className="bx--col">
                                            <h4>Organize</h4>
                                            <hr />
                                            <p>
                                                Data refinery, roles, permissions, etc.
                                            </p>
                                        </div>
                                    </div>
                                </ClickableTile>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeAttritionBuild;