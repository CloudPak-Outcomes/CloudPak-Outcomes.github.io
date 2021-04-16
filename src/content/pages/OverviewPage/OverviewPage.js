import React from 'react';
import '../../_content-page.scss';
import './_overview-page.scss';

const OverviewPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width">
            <div className="bx--row overview-page__banner">
                <div className="bx--col bx--offset-lg-2">
                    <h2 className="content-page__heading">Overview</h2>
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col">
                    <div className="bx--row">
                        <div className="bx--col-lg-10 bx--offset-lg-2">
                            <p>
                                Cloud Pak for Data Outcomes is a central location for demos and
                                technical labs. It includes instructions, code repositories, scripts,
                                and other resources for IBM sellers and business partners looking
                                to learn about solution capabilities, or access pre-built demo
                                environments for customer engagements.
                            </p>
                            <p>
                                Current available demos:
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;