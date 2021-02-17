// Another way of creating higher order component where we have a normal JS func returning a functional component

const withClass = (WrappedComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withClass;
