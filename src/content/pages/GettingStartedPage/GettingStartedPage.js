import React from 'react';
import '../../_content-page.scss';
import './_getting-started-page.scss';

const GettingStartedPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width">
            <div className="bx--row getting-started-page__banner">
                <div className="bx--col bx--offset-lg-2">
                    <h2 className="content-page__heading">Getting Started</h2>
                </div>
            </div>
            <div className="bx--row">
                <div className="bx--col">
                    <div className="bx--row">
                        <div className="bx--col-lg-10 bx--offset-lg-2">
                            <p>
                                Content here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GettingStartedPage;