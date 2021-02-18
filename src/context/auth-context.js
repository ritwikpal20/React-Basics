import React from "react";

// For passing authenticated information without using props on multilevel components
const authContext = React.createContext({
    authenticated: false,
    login: () => {},
});

export default authContext;
