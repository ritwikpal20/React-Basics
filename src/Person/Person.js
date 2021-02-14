import classes from "./Person.module.css";

const person = (props) => {
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
