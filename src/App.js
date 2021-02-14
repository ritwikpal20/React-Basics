import styles from "./App.module.css";
import React, { Component } from "react";
import Person from "./Person/Person";

// Function based Component
// const App = (props) => {
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             { name: "Max", age: 20 },
//             { name: "Manu", age: 30 },
//         ],
//     });
//     const switchNameHandler = () => {
//         setPersonsState({
//             persons: [
//                 { name: "Rit", age: 20 },
//                 { name: "Wik", age: 30 },
//             ],
//         });
//     };

//     const [otherState, setOtherState] = useState("some other state");
//     const changeStateHandler = () => {
//         setOtherState("state change");
//     };

//     return (
//         <div className="App">
//             <button onClick={switchNameHandler}>Switch name</button>
//             <Person
//                 name={personsState.persons[0].name}
//                 age={personsState.persons[0].age}
//             />
//             <Person
//                 name={personsState.persons[1].name}
//                 age={personsState.persons[1].age}
//             />
//             <button onClick={changeStateHandler}> Change State</button>
//             <p>{otherState}</p>
//         </div>
//     );

//     // Another way
//     // return React.createElement(
//     //     "div",
//     //     { className: "App" },
//     //     React.createElement("h1", null, "First React ")
//     // );
// };

// Class based Component
class App extends Component {
    state = {
        persons: [
            { id: "1", name: "Max", age: 20 },
            { id: "2", name: "Manu", age: 30 },
            { id: "3", name: "Rit", age: 19 },
        ],
        showPersons: false,
    };

    // for deleting each person
    deletePersonsHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({ persons: persons });
    };
    // for changing name of each person
    changedNameHandler = (event, index) => {
        const person = { ...this.state.persons[index] };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[index] = person;
        this.setState({ persons: persons });
    };
    // for toggling between showing all persons and showing no persons
    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons,
        });
    };
    render() {
        const btnClasses = [styles.Button];
        // toggling person depending on state of showPersons
        let persons = null;
        if (this.state.showPersons) {
            // displaying list of persons
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                change={(event) =>
                                    this.changedNameHandler(event, index)
                                }
                                click={() => this.deletePersonsHandler(index)}
                            />
                        );
                    })}
                </div>
            );

            //Adding styles dynamically to button
            btnClasses.push(styles.Red);
        }

        // Adding dynamic classes to paragraph
        const classes = [];
        const personsLength = this.state.persons.length;
        if (personsLength <= 2) {
            classes.push(styles.red);
        }
        if (personsLength <= 1) {
            classes.push(styles.bold);
        }

        return (
            <div className={styles.App}>
                <p className={classes.join(" ")}>
                    Your have {this.state.persons.length} persons left
                </p>
                <button
                    onClick={this.togglePersonsHandler}
                    className={btnClasses.join(" ")}
                >
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
