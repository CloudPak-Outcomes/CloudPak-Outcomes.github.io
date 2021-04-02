import React, { Component } from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderPanel,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    HeaderSideNavItems,
    Switcher,
    SwitcherItem,
    SwitcherDivider
} from 'carbon-components-react';
import { AppSwitcher20 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

class OutcomesHeader extends Component {
    constructor() {
        super();
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
                    </Header>
                )}
            />
        );
    }
}

export default OutcomesHeader;