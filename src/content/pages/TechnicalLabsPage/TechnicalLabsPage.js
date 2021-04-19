import React from 'react';
import '../../_content-page.scss';

const TechnicalLabsPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width">
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <h2 className="content-page__heading">Technical Labs Overview</h2>
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col">
                    <div className="bx--row">
                        <div className="bx--col-lg-10 bx--offset-lg-2">
                            <p>
                                Technical labs are designed for IBM technical sellers and business
                                partners looking for hands-on experiences with the products. In the labs,
                                you will work with code, perform product configuration, build models,
                                and more.
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

export default TechnicalLabsPage;