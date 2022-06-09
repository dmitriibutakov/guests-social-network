import React from "react";

export function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        return (
            <Component
                {...props}
        />
    );
    }
    return ComponentWithRouterProp;
}
