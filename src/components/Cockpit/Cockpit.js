import styles from "./Cockpit.module.css";

const cockpit = (props) => {
    // Adding dynamic classes to paragraph
    const classes = [];
    const personsLength = props.persons.length;
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
                Your have {props.persons.length} persons left
            </p>
            <button onClick={props.clicked} className={btnClasses.join(" ")}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;
