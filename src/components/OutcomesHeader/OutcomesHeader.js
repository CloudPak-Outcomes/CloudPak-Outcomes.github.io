import React, { Component } from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderMenuButton,
    HeaderGlobalBar,
    HeaderPanel,
    HeaderGlobalAction,
    SkipToContent,
    Switcher,
    SwitcherItem,
    SwitcherDivider, SideNavItems, SideNav
} from 'carbon-components-react';
import { AppSwitcher20 } from '@carbon/icons-react';
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
                        <HeaderGlobalBar>
                            <HeaderGlobalAction
                                aria-label="Switch Demos"
                                isActive
                                onClick={this.app_switch_click}
                                tooltipAlignment="end">
                                <AppSwitcher20 />
                            </HeaderGlobalAction>
                        </HeaderGlobalBar>
                        <HeaderPanel aria-label="Demos" expanded={this.state.switcher_expanded}>
                            <Switcher aria-label="Switcher Container">
                                <SwitcherItem
                                    aria-label="Employee Attrition"
                                    element={Link}
                                    to="/employee-attrition"
                                    onClick={this.hide_switcher} >
                                    Employee Attrition
                                </SwitcherItem>
                                <SwitcherDivider />
                                <SwitcherItem
                                    aria-label="Mortgage Default"
                                    element={Link}
                                    to="/mortgage-default"
                                    onClick={this.hide_switcher} >
                                    Mortgage Default
                                </SwitcherItem>
                            </Switcher>
                        </HeaderPanel>
                        <SideNav>
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