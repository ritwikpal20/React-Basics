import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";
import { Component } from "react";

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("Persons.js getDerivedStateFromProps ", props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        // should return true or false depending on whether component should update or not
        console.log("Persons.js shouldComponentUpdate ", nextProps);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Persons.js getSnapshotBeforeUpdate ", prevProps);
        return { message: "brief snapshot" };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(
            "Persons.js componentDidUpdate ",
            prevProps,
            " Here are the snapshots: ",
            snapshot
        );
    }
    render() {
        console.log("Persons.js Rendering...");
        return (
            <div>
                {this.props.persons.map((person, index) => {
                    return (
                        <ErrorBoundary key={person.id}>
                            <Person
                                name={person.name}
                                age={person.age}
                                change={(event) =>
                                    this.props.changed(event, index)
                                }
                                click={() => this.props.clicked(index)}
                            />
                        </ErrorBoundary>
                    );
                })}
            </div>
        );
    }
}

export default Persons;
