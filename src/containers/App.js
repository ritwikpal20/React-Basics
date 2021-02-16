import styles from "./App.module.css";
import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
    constructor(props) {
        super(props);
        console.log("App.js Constructor");
        this.state = {
            persons: [
                { id: "1", name: "Max", age: 20 },
                { id: "2", name: "Manu", age: 30 },
                { id: "3", name: "Rit", age: 19 },
            ],
            showPersons: false,
            showCockpit: true,
        };
    }
    static getDerivedStateFromProps(props, state) {
        console.log("App.js getDerivedStateFromProps");
        return state;
    }
    componentDidMount() {
        console.log("App.js componentDidMount");
    }

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
    toggleCockpitHandler = () => {
        this.setState({
            showCockpit: !this.state.showCockpit,
        });
    };
    render() {
        console.log("App.js Rendering...");
        // toggling person depending on state of showPersons
        let persons = null;
        if (this.state.showPersons) {
            // displaying list of persons
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonsHandler}
                    changed={this.changedNameHandler}
                />
            );
        }

        return (
            <div className={styles.App}>
                <button onClick={this.toggleCockpitHandler}>
                    Toggle Cockpit
                </button>
                {this.state.showCockpit ? (
                    <Cockpit
                        appTitle={this.props.appTitle}
                        personsLength={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        clicked={this.togglePersonsHandler}
                    />
                ) : null}
                {persons}
            </div>
        );
    }
}

export default App;
