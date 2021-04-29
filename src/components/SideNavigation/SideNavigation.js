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
                    <SideNavLink href={`#/sales-demos`}>
                        Overview
                    </SideNavLink>
                </SideNavMenuItem>
                <SideNavMenuItem>
                    <SideNavLink href={`#/sales-demos/employee-attrition`}>
                        Employee Attrition
                    </SideNavLink>
                </SideNavMenuItem>
                <SideNavMenuItem>
                    <SideNavLink href={`#/sales-demos/mortgage-default`}>
                        Mortgage Default
                    </SideNavLink>
                </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="Technical Labs">
                <SideNavMenuItem>
                    <SideNavLink href={`#/technical-labs`}>
                        Overview
                    </SideNavLink>
                </SideNavMenuItem>
                <SideNavMenuItem>
                    <SideNavLink href={`#/technical-labs/employee-attrition`}>
                        Employee Attrition
                    </SideNavLink>
                </SideNavMenuItem>
            </SideNavMenu>
        </>
    )
}