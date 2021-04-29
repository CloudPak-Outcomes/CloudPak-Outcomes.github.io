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

class MortgageDefaultDemo extends Component {
    render() {
        return (
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col bx--offset-lg-2">
                        <div className="bx--row show-banner">
                            <div className="bx--col">
                                <Breadcrumb className="breadcrumb">
                                    <BreadcrumbItem href="/#">Cloud Pak Outcomes</BreadcrumbItem>
                                    <BreadcrumbItem href="/#/sales-demos">Sales Demos</BreadcrumbItem>
                                </Breadcrumb>
                                <h2 className="content-page__heading">Demo: Mortgage Default</h2>
                            </div>
                        </div>
                        <div className="bx--row">
                            <div className="bx--col">
                                <p>
                                    Follow the instructions below to register for access to a Cloud Pak for Data
                                    cluster that has been pre-loaded with the Mortgage Default use case. Using
                                    the provided scripts, you can demo the use case to clients.
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
                                                Evaluate an existing employee attrition model with <strong>Watson
                                                OpenScale</strong> and discover issues with data drift. Explore
                                                data engineering and rapid prototyping with <strong>AutoAI</strong>,
                                                and run a head-to-head comparison between the production and
                                                challenger models.
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

export default MortgageDefaultDemo;