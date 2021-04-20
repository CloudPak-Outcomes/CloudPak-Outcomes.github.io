import React from 'react';
import '../../_content-page.scss';
import './_overview-page.scss';
import {Breadcrumb, BreadcrumbItem, ClickableTile} from "carbon-components-react";
import { CodeSyntax, Presentation } from "@carbon/pictograms-react";

const OverviewPage = () => {
    return (
        <div className="bx--grid">
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <div className="bx--row show-banner">
                        <div className="bx--col">
                            <Breadcrumb className="breadcrumb">
                                <BreadcrumbItem href="/#">Cloud Pak Outcomes</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="content-page__heading">Overview</h2>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <p>
                                Cloud Pak for Data Outcomes is a central location for demos and
                                technical labs. It includes instructions, code repositories, scripts,
                                and other resources for IBM sellers and business partners looking
                                to learn about solution capabilities, or access pre-built demo
                                environments for customer engagements. There are two main types of assets:
                            </p>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <ClickableTile href={`#/sales-demos`}>
                                <div className="bx--row">
                                    <div className="bx--col-lg-2">
                                        <Presentation/>
                                    </div>
                                    <div className="bx--col">
                                        <h4>Sales Demos</h4>
                                        <hr />
                                        <p>
                                            Intended for sellers, these demos provide access to
                                            pre-configured environments to demonstrate solution
                                            capabilities.
                                        </p>
                                    </div>
                                </div>
                            </ClickableTile>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <ClickableTile href={`#/technical-labs`}>
                                <div className="bx--row">
                                    <div className="bx--col-lg-2">
                                        <CodeSyntax/>
                                    </div>
                                    <div className="bx--col">
                                        <h4>Technical Labs</h4>
                                        <hr />
                                        <p>
                                            Built for technical sellers, these labs allow users to get
                                            hands-on experience with products in an environment
                                            populated with data assets and models.
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

export default OverviewPage;