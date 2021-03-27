import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import AppMarkdown from './markdown/analyze-monitor/analyze-monitor.md';
import gfm from 'remark-gfm'

class EmployeeAttritionBuild extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col-max">
                        <ReactMarkdown plugins={[gfm]} children={markdown} />
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeAttritionBuild;