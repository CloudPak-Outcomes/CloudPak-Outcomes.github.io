import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import AnalyzeMarkdown from './markdown/analyze-monitor/analyze-monitor.md';
import AboutMarkdown from './markdown/about/about.md';
import OrganizeMarkdown from './markdown/organize/organize.md';
import CollectMarkdown from './markdown/collect/collect.md';
import gfm from 'remark-gfm'
import {
    Tabs,
    Tab,
} from 'carbon-components-react';

class EmployeeAttritionBuild extends Component {
    constructor() {
        super();
        this.state = {
            about_markdown: '',
            analyze_markdown: '',
            collect_markdown: '',
            organize_markdown: ''
        };
        this.props = {
            tabs: {
                selected: 0,
                role: 'navigation',
            },
            tab: {
                role: 'presentation',
                tabIndex: 0,
            },
        };
    }

    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(AboutMarkdown).then(res => res.text()).then(text => this.setState({ about_markdown: text }));
        fetch(AnalyzeMarkdown).then(res => res.text()).then(text => this.setState({ analyze_markdown: text }));
        fetch(CollectMarkdown).then(res => res.text()).then(text => this.setState({ collect_markdown: text }));
        fetch(OrganizeMarkdown).then(res => res.text()).then(text => this.setState({ organize_markdown: text }));
    }

    transformURI(uri, newDir) {
        uri = uri.replace('./img/media/', '');
        uri = uri.replace('./img/', '');
        uri = uri.replace('./media/', '');
        return (`${newDir}/${uri}`);
    }

    render() {
        const { markdown } = this.state;
        return (
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col">
                        <Tabs {...this.props.tabs}>
                            <Tab {...this.props.tab} label="About">
                                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                                    <div className="bx--row landing-page__tab-content">
                                        <div className="bx--col tutorial-content">
                                            <ReactMarkdown plugins={[gfm]} children={this.state.about_markdown} />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab {...this.props.tab} label="Collect">
                                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                                    <div className="bx--row landing-page__tab-content">
                                        <div className="bx--col tutorial-content">
                                            <ReactMarkdown plugins={[gfm]} children={this.state.collect_markdown} />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab {...this.props.tab} label="Organize">
                                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                                    <div className="bx--row landing-page__tab-content">
                                        <div className="bx--col tutorial-content">
                                            <ReactMarkdown plugins={[gfm]} children={this.state.organize_markdown} />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab {...this.props.tab} label="Analyze/Monitor">
                                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                                    <div className="bx--row landing-page__tab-content">
                                        <div className="bx--col tutorial-content">
                                            <ReactMarkdown plugins={[gfm]}
                                                           transformImageUri={uri => this.transformURI(uri, './img/employee-attrition/demo/analyze-monitor')}
                                                           children={this.state.analyze_markdown} />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeAttritionBuild;