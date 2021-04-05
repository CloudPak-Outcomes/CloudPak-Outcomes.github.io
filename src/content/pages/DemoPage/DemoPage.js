import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {
    SideNav,
    SideNavItems,
    SideNavLink,
    CodeSnippet, Breadcrumb, BreadcrumbItem
} from 'carbon-components-react';


class DemoPage extends Component {
    constructor(props) {
        super(props);

        let path_array = this.props.match.url.split('/');
        const crumbs = [
            {
                name: path_array[1].replace('-', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
                url: path_array[1]
            },
            {
                name: path_array[2].replace('-', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
                url: `${path_array[1]}/${path_array[2]}`
            }
        ];

        this.state = {
            markdown: '',
            sectionHeadings: [],
            breadCrumbs: crumbs
        };
    }

    scrollTo = (ref) => {
        ref.scrollIntoView({behavior: 'smooth'})
    }

    async componentDidMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        const file = await import(`../../markdown${this.props.match.url}/demo.md`);
        const response = await fetch(file.default);
        const text = await response.text();

        this.setState({
            markdown: text
        });


    }

    transformURI(uri) {
        uri = uri.replace('./img/media/', '');
        uri = uri.replace('./img/', '');
        uri = uri.replace('./media/', '');
        return (`/img/${this.props.match.url}/${uri}`);
    }

    parseHeading({ children }) {
        const { sectionHeadings } = this.state;

        return (
            <div>
                {children.map((child) => {
                    const stringValue = child.props.value;
                    if (sectionHeadings.indexOf(stringValue) < 0) {
                        sectionHeadings.push(stringValue);
                        this.setState({ sectionHeadings });
                    }

                    return (
                        <div key={stringValue.replaceAll(' ', '_')} id={stringValue.replaceAll(' ', '_')} >
                            <h2>{child}</h2>
                        </div>
                    );
                })}
            </div>
        );
    }

    clickHandler(e) {
        // handle clicks in the left nav. Carbon generates <a> tags to wrap the links which are
        // clickable, but don't have the innerHTML target we need, so we need to make sure that
        // we're getting the child span that has the target applied to it
        let target = '';
        if (e.target.children.length === 0) {
            target = e.target.innerHTML.replaceAll(' ', '_');
        } else {
            target = e.target.children[0].innerHTML.replaceAll(' ', '_');
        }
        const yOffset = -60;
        const y = document.getElementById(target).getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    render() {
        const { sectionHeadings } = this.state;
        return (
            <>
                <SideNav
                    isFixedNav
                    expanded={true}
                    isChildOfHeader={true}
                    aria-label="Contents"
                    className="tutorial-nav"
                >
                    <SideNavItems>
                        {sectionHeadings.map((section) => {
                            return (
                                <SideNavLink
                                    key={`#${section.replaceAll(' ', '_')}`}
                                    onClick={this.clickHandler}
                                >
                                    {section}
                                </SideNavLink>
                            );
                        })};
                    </SideNavItems>

                </SideNav>
                <div className="bx--grid">
                    <div className="bx--row">
                        <div className="bx--col-lg-10 bx--offset-lg-2">
                            <Breadcrumb>
                                <BreadcrumbItem href="/#">Cloud Pak Outcomes</BreadcrumbItem>
                                <BreadcrumbItem href={`/#${this.state.breadCrumbs[0].url}`}>{this.state.breadCrumbs[0].name}</BreadcrumbItem>
                                <BreadcrumbItem href={`/#${this.state.breadCrumbs[1].url}`}>{this.state.breadCrumbs[1].name}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col-lg-10 bx--offset-lg-2 tutorial-content">
                            <ReactMarkdown plugins={[gfm]}
                                           transformImageUri={uri => this.transformURI(uri)}
                                           children={this.state.markdown}
                                           renderers={{
                                               code: (node) => {
                                                   return (
                                                       <CodeSnippet type="inline" feedback="Copied to clipboard">
                                                           {node}
                                                       </CodeSnippet>
                                                   );
                                               },
                                               heading: (node) => {
                                                   return this.parseHeading(node);
                                               },
                                           }}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default DemoPage;