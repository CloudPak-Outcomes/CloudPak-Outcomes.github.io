import React from 'react';
import {
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem
} from 'carbon-components-react';

export default function SideNavigation() {
    return(
        <>
            <SideNavMenu title="Scenarios">
                <SideNavMenuItem>
                    <SideNavLink href={`#/employee-attrition`}>
                        Employee Attrition
                    </SideNavLink>
                </SideNavMenuItem>
                <SideNavMenuItem>
                    <SideNavLink href={`#/mortgage-default`}>
                        Mortgage Default
                    </SideNavLink>
                </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="Category title 2">
                <SideNavMenuItem>one</SideNavMenuItem>
                <SideNavMenuItem>two</SideNavMenuItem>
            </SideNavMenu>
        </>
    )
}