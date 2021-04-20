import React from 'react';
import {
    ClickableTile,
    Breadcrumb,
    BreadcrumbItem
} from 'carbon-components-react';
import '../../_content-page.scss';
import { HomeFront, EmployeeInsights } from "@carbon/pictograms-react";

const SalesDemosPage = () => {
    return (
        <div className="bx--grid">
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <div className="bx--row show-banner">
                        <div className="bx--col">
                            <Breadcrumb className="breadcrumb">
                                <BreadcrumbItem href="/#">Cloud Pak Outcomes</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="content-page__heading">Sales Demos Overview</h2>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <p>
                                Sales demos are designed for IBM sellers and business partners looking
                                for a pre-configured environment with scripted assets to demonstrate
                                the capabilities of Cloud Pak for Data. In the demos, you will explore
                                the different products to show how they fit together to solve business
                                problems.
                            </p>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <ClickableTile href={`#/sales-demos/employee-attrition`}>
                                <div className="bx--row">
                                    <div className="bx--col-lg-2">
                                        <EmployeeInsights/>
                                    </div>
                                    <div className="bx--col">
                                        <h4>Employee Attrition</h4>
                                        <hr />
                                        <p>
                                            A major electronics retailer is struggling with high employee
                                            turnover, which is starting to impact their business. See how <strong>Watson Studio</strong>, <strong>AutoAI</strong>,
                                            and <strong>Watson OpenScale</strong> combine to help them identify
                                            issues with their current predictive models, and then rapidly
                                            prototype and evaluate an upgraded model.
                                        </p>
                                    </div>
                                </div>
                            </ClickableTile>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <ClickableTile href={`#/sales-demos/mortgage-default`}>
                                <div className="bx--row">
                                    <div className="bx--col-lg-2">
                                        <HomeFront/>
                                    </div>
                                    <div className="bx--col">
                                        <h4>Mortgage Default</h4>
                                        <hr />
                                        <p>
                                            Description.
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
};

export default SalesDemosPage;