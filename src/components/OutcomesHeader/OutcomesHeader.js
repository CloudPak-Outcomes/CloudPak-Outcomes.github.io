import React, { Component } from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderMenuButton,
    SkipToContent,
    SideNavItems,
    SideNav
} from 'carbon-components-react';
import { Link } from 'react-router-dom';
import SideNavigation from "../SideNavigation";

class OutcomesHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switcher_expanded: false,
        };
    };

    app_switch_click = () => {
        this.setState({ switcher_expanded: !this.state.switcher_expanded })
    }

    hide_switcher = () => {
        console.log('here');
        this.setState({switcher_expanded: false});
    }

    render() {
        return (
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="Cloud Pak for Data Outcomes">
                        <SkipToContent />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName element={Link} to="/" prefix="IBM">
                            CloudPak for Data Outcomes
                        </HeaderName>
                        <SideNav aria-label="Outcomes Menu">
                            <SideNavItems>
                                <SideNavigation />
                            </SideNavItems>
                        </SideNav>
                    </Header>
                )}
            />
        );
    }
}

export default OutcomesHeader;