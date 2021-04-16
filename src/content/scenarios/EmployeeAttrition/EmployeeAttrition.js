import React from "react";
import {
    ClickableTile,
    Breadcrumb,
    BreadcrumbItem
} from 'carbon-components-react';
import '../../_content-page.scss';

const EmployeeAttrition = () => {
    return (
        <div className="bx--grid">
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <Breadcrumb>
                        <BreadcrumbItem href="/#">Cloud Pak Outcomes</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Employee Attrition</h2>
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <p>
                        In this use case, we examine how the COVID-19 pandemic has affected an
                        electronics retailer. While increased online orders have bolstered sales,
                        employee attrition in the warehouse and shipping departments threatens
                        to reduce customer satisfaction and do permanent damage to the business.
                    </p>
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col-lg-5 bx--offset-lg-2">
                    <ClickableTile href="#/employee-attrition/demo-it">
                        <h4>Demo It</h4>
                        <hr />
                        <p>
                            Register for access on a pre-build Cloud Pak for Data cluster with
                            all the assets and scripting you need to demo the full Cloud Pak for Data
                            solution for customers.
                        </p>
                    </ClickableTile>
                </div>
                <div className="bx--col-lg-5">
                    <ClickableTile href="#/employee-attrition/build-it">
                        <h4>Build It</h4>
                        <hr />
                        <p>
                            Get code files, repositories, and step-by-step technical instructions
                            for building the demo environment on your own Cloud Pak for Data cluster.
                        </p>
                    </ClickableTile>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAttrition;