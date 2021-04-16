import React from 'react';
import '../../_content-page.scss';
import './_landing-page.scss';

const LandingPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width">
            <div className="bx--row landing-page__banner">
                <div className="bx--col bx--offset-lg-2">
                    <h2 className="landing-page__heading">Cloud Pak for Data Outcomes</h2>
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col">
                    <div className="bx--row">
                        <div className="bx--col-lg-3 bx--offset-lg-2">
                            <p>What is Cloud Pak for Data?</p>
                        </div>
                        <div className="bx--col-lg-7">
                            <p>Answer here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;