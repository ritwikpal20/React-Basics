import classes from "./Person.module.css";

const person = (props) => {
    console.log("Person.js Rendering...");
    // Creating custom error
    const rnd = Math.random();
    if (rnd > 0.9) {
        throw new Error("Something went wrong. Try again after sometime");
    }

    return (
        <div className={classes.Person}>
            {/* deleting the person on clicking first line */}
            <p onClick={props.click}>
                I am a {props.name} and i am {props.age} yrs old
                {props.children}
            </p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
};

export default person;
