import React, { useEffect, useRef, useContext } from "react";
import styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    // useEffect without any 2nd args , would run at every render . useEffect with empty array as 2nd args would run first time the component renders(same as componentDidMount in class based component). If we want to run it when a property or dependency changes, we add it to the array in 2nd arg(same as componentDidUpdate).
    useEffect(() => {
        console.log("Cockpit.js useEffect");
        // custom sending request to server (fake one)
        setTimeout(() => {
            alert("Sending request (fake for illustration purpose)");
        }, 1000);

        toggleBtnRef.current.click();

        // return statement is same as componentWillUnmount
        return () => {
            console.log("Cockpit.js cleanup(similar to componentWillUnmount)");
        };
    }, []);

    useEffect(() => {
        console.log("2nd useEffect Cockpit.js");
        return () => {
            console.log("clean up in 2nd useEffect Cockpit.js");
        };
    });

    //For using context object which allows us to pass data without using props
    const authContext = useContext(AuthContext);
    console.log(authContext);

    // Adding dynamic classes to paragraph
    const classes = [];
    const personsLength = props.personsLength;
    if (personsLength <= 2) {
        classes.push(styles.red);
    }
    if (personsLength <= 1) {
        classes.push(styles.bold);
    }

    //Adding styles dynamically to button
    const btnClasses = [styles.Button];
    if (props.showPersons) btnClasses.push(styles.Red);

    return (
        <div>
            <h1>Person Manager</h1>
            <p className={classes.join(" ")}>
                Your have {props.personsLength} persons left
            </p>
            <button
                ref={toggleBtnRef}
                onClick={props.clicked}
                className={btnClasses.join(" ")}
            >
                Toggle Persons
            </button>
            <br />
            <button onClick={authContext.login}>Log In</button>;
        </div>
    );
};

export default React.memo(Cockpit);
