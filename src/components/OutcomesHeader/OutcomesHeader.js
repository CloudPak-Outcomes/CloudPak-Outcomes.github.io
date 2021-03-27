import React from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    HeaderSideNavItems,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';

const OutcomesHeader = () => (
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
                <SideNav aria-label="Outcomes navigation" isFixedNav expanded={true}>
                    <SideNavItems>
                        <SideNavMenu title="Employee Attrition">
                            <SideNavMenuItem element={Link} to='/employee-attrition'>About</SideNavMenuItem>
                            <SideNavMenuItem element={Link} to='/employee-attrition/demo'>Demo it</SideNavMenuItem>
                            <SideNavMenuItem element={Link} to='/employee-attrition/build'>Build it</SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavMenu title="Mortgage Default">
                            <SideNavMenuItem>About</SideNavMenuItem>
                            <SideNavMenuItem>Demo it</SideNavMenuItem>
                            <SideNavMenuItem>Build it</SideNavMenuItem>
                        </SideNavMenu>
                    </SideNavItems>
                </SideNav>
            </Header>
        )}
    />
);

export default OutcomesHeader;