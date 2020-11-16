import React from "react";
import StoreContext from "../../storeContext";
const Sidebar = () => {
    return (
        <StoreContext.Consumer>
            {(store) => <Sidebar friends={store.friend} />}
        </StoreContext.Consumer>
    );
};

export default Sidebar;
