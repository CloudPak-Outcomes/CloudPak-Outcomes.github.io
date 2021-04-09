import React from 'react';
import {ClickableTile} from "carbon-components-react";

const LandingPage = () => {
    return (
        <div className="bx--grid">
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <h2>Cloud Pak for Data Outcomes</h2>
                    <p>About the Outcomes info goes here.</p>
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col">
                    <div className="bx--row">
                        <div className="bx--col-lg-5 bx--offset-lg-2">
                            <ClickableTile href="#/employee-attrition">
                                <h4>Employee Attrition</h4>
                                <hr />
                                <p>
                                    Description here.
                                </p>
                            </ClickableTile>
                        </div>
                        <div className="bx--col-lg-5">
                            <ClickableTile>
                                <h4>Mortgage Default</h4>
                                <hr />
                                <p>
                                    Description here.
                                </p>
                            </ClickableTile>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;