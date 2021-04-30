import React from 'react';
import '../../_content-page.scss';
import './_getting-started-page.scss';
import {Breadcrumb, BreadcrumbItem} from "carbon-components-react";

const GettingStartedPage = () => {
    return (
        <div className="bx--grid">
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <div className="bx--row show-banner">
                        <div className="bx--col">
                            <Breadcrumb className="breadcrumb">
                                <BreadcrumbItem href="/#">Cloud Pak Outcomes</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="content-page__heading">Getting Started</h2>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <p>
                                To begin, IBM sellers and business partners should <a href="https://assetrepo.ibm.com/" target="_blank">
                                register for access</a> to a Cloud Pak for Data Outcomes cluster. Once you
                                have registered, use the left-hand navigation to select between the different <a href="/#/sales-demos">sales demos</a> and <a href="/#/technical-labs">
                                technical labs</a>, where you will find step-by-step instructions for your
                                chosen use case and set of capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GettingStartedPage;