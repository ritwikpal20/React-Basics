import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = (props) => {
    console.log('Persons.js Rendering...')
    return (
        <div>
            {props.persons.map((person, index) => {
                return (
                    <ErrorBoundary key={person.id}>
                        <Person
                            name={person.name}
                            age={person.age}
                            change={(event) => props.changed(event, index)}
                            click={() => props.clicked(index)}
                        />
                    </ErrorBoundary>
                );
            })}
        </div>
    );
};

export default persons;
