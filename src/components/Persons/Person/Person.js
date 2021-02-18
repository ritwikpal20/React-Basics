import classes from "./Person.module.css";
import React, { Component } from "react";
import withClass from "../../../hoc/withClass";
import Auxiliary from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    render() {
        console.log("Person.js Rendering...");
        // Creating custom error
        const rnd = Math.random();
        if (rnd > 0.9) {
            throw new Error("Something went wrong. Try again after sometime");
        }

        return (
            // Consumer component takes a function as a child which eventually return the JSX code and the context object gets passed into the function
            <AuthContext.Consumer>
                {(context) => {
                    return (
                        <Auxiliary>
                            {context.authenticated ? (
                                <p>Authenticated!!!</p>
                            ) : (
                                <p>Log In</p>
                            )}

                            {/* deleting the person on clicking first line */}
                            <p onClick={this.props.click}>
                                I am a {this.props.name} and i am{" "}
                                {this.props.age} yrs old
                                {this.props.children}
                            </p>
                            <input
                                type="text"
                                onChange={this.props.change}
                                value={this.props.name}
                                // The older way of creating ref by passing function is commented out.
                                // ref={(inputEl) => {
                                //     this.inputElement = inputEl;
                                // }}
                                ref={this.inputElementRef}
                            />
                        </Auxiliary>
                    );
                }}
            </AuthContext.Consumer>
        );
    }
    componentDidMount = () => {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    };
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func,
};

export default withClass(Person, classes.Person);
