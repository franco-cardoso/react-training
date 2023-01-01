const Bar = (props: { isLoading: boolean }) => {
    const { isLoading } = props;

    return (
        <div className="bar-container">
            <div className="bar"></div>
        </div>
    );
};

export default Bar;
