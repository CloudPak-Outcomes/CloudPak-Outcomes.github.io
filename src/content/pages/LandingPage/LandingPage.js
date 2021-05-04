import React from 'react';
import '../../_content-page.scss';
import './_landing-page.scss';
import {CloudTutorials} from "@carbon/pictograms-react";
import {ClickableTile} from "carbon-components-react";

const LandingPage = () => {
    return (
        <div className="bx--grid">
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <div className="bx--row landing-page__banner">
                        <div className="bx--col">
                            <h2 className="landing-page__heading">Cloud Pak for Data<br/>Outcomes</h2>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                            <div className="bx--row">
                                <div className="bx--col-lg-3">
                                    <h4>What is Cloud Pak for Data Outcomes?</h4>
                                </div>
                                <div className="bx--col">
                                    <p>Cloud Pak for Data Outcomes is a central location for demos and technical labs. It includes instructions, code repositories, scripts, and other resources for IBM sellers and business partners looking to learn about solution capabilities, or access pre-built demo environments for customer engagements.</p>
                                </div>
                            </div>
                            <div className="bx--row">
                                <div className="bx--col">
                                    <ClickableTile href={`#/getting-started`}>
                                        <div className="bx--row">
                                            <div className="bx--col-lg-2">
                                                <CloudTutorials/>
                                            </div>
                                            <div className="bx--col">
                                                <h4>Getting Started</h4>
                                                <hr />
                                                <p>
                                                    Register for access here.
                                                </p>
                                            </div>
                                        </div>
                                    </ClickableTile>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;