type PropTypes = {
    setIsLoading: Function;
    progress: number;
    setProgress: Function;
};

const Controls = (props: PropTypes) => {
    return (
        <div>
            <ul>
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </ul>
        </div>
    );
};

export default Controls;
