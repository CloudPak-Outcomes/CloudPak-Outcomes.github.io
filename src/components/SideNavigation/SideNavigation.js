import React from 'react';
import {
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem
} from 'carbon-components-react';
import './_side-navigation.scss';

export default function SideNavigation() {
    return(
        <>
            <SideNavLink href={`#/overview`}>
                Overview
            </SideNavLink>
            <SideNavLink href={`#/getting-started`}>
                Getting Started
            </SideNavLink>
            <SideNavMenu title="Sales Demos">
                <SideNavMenuItem>
                    <SideNavLink href={`#/mortgage-default`}>
                        Mortgage Default
                    </SideNavLink>
                </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="Technical Labs">
                <SideNavMenuItem>
                    <SideNavLink href={`#/employee-attrition`}>
                        Employee Attrition
                    </SideNavLink>
                </SideNavMenuItem>
            </SideNavMenu>
        </>
    )
}