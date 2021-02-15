import classes from "./Person.module.css";
import { Component } from "react";

class Person extends Component {
    render() {
        console.log("Person.js Rendering...");
        // Creating custom error
        const rnd = Math.random();
        if (rnd > 0.9) {
            throw new Error("Something went wrong. Try again after sometime");
        }

        return (
            <div className={classes.Person}>
                {/* deleting the person on clicking first line */}
                <p onClick={this.props.click}>
                    I am a {this.props.name} and i am {this.props.age} yrs old
                    {this.props.children}
                </p>
                <input
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name}
                />
            </div>
        );
    }
}

export default Person;
