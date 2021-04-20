import React from 'react';
import '../../_content-page.scss';
import './_overview-page.scss';
import {Breadcrumb, BreadcrumbItem} from "carbon-components-react";

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
                                environments for customer engagements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;