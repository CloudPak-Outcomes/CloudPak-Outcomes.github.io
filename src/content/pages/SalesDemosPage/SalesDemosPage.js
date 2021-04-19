import React from 'react';
import '../../_content-page.scss';

const SalesDemosPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width">
            <div className="bx--row">
                <div className="bx--col bx--offset-lg-2">
                    <h2 className="content-page__heading">Sales Demos Overview</h2>
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col">
                    <div className="bx--row">
                        <div className="bx--col-lg-10 bx--offset-lg-2">
                            <p>
                                Sales demos are designed for IBM sellers and business partners looking
                                for a pre-configured environment with scripted assets to demonstrate
                                the capabilities of Cloud Pak for Data. In the demos, you will explore
                                the different products to show how they fit together to solve business
                                problems.
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

export default SalesDemosPage;