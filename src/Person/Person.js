import "./Person.css";
import styled from "styled-components";

// Each styled method returns a React component
const StyledDiv = styled.div`
    width: 60%;
    border: solid 2px #eee;
    padding: 10px;
    margin: 10px auto;
    box-shadow: 2px 2px 2px grey;
    text-align: center;

    &:hover {
        transform: scale(1.2);
    }
    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    return (
        <StyledDiv>
            {/* deleting the person on clicking first line */}
            <p onClick={props.click}>
                I am a {props.name} and i am {props.age} yrs old
                {props.children}
            </p>
            <input type="text" onChange={props.change} value={props.name} />
        </StyledDiv>
    );
};

export default person;
