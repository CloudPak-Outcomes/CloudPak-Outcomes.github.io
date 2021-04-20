import React from 'react';
import {
    ClickableTile,
    Breadcrumb,
    BreadcrumbItem
} from 'carbon-components-react';
import '../../_content-page.scss';
import { IdBadge } from "@carbon/pictograms-react";

const TechnicalLabsPage = () => {
    return (
        <div className="bx--grid">
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <div className="bx--row show-banner">
                        <div className="bx--col">
                            <Breadcrumb className="breadcrumb">
                                <BreadcrumbItem href="/#">Cloud Pak Outcomes</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="content-page__heading">Technical Labs Overview</h2>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <p>
                                Technical labs are designed for IBM technical sellers and business
                                partners looking for hands-on experiences with the products. In the labs,
                                you will work with code, perform product configuration, build models,
                                and more.
                            </p>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <ClickableTile href={`#/technical-labs/employee-attrition`}>
                                <div className="bx--row">
                                    <div className="bx--col-lg-2">
                                        <IdBadge/>
                                    </div>
                                    <div className="bx--col">
                                        <h4>Employee Attrition</h4>
                                        <hr />
                                        <p>
                                            A major electronics retailer is struggling with high employee
                                            turnover, which is starting to impact their business. See how
                                            <strong>Watson Studio</strong>, <strong>AutoAI</strong>, and
                                            <strong>Watson OpenScale</strong> combine to help them identify
                                            issues with their current predictive models, and then rapidly
                                            prototype and evaluate an upgraded model.
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

export default TechnicalLabsPage;