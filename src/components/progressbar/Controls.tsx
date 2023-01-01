type PropTypes = {
    setIsLoading: Function;
    progress: number;
    setProgress: Function;
};

const Controls = (props: PropTypes) => {
    const { setIsLoading, progress, setProgress } = props;

    return (
        <div>
            <ul>
                <button
                    onClick={() => {
                        setProgress(0.001);
                        setIsLoading(true);
                    }}
                >
                    Start
                </button>
                <button onClick={() => setIsLoading(false)}>Stop</button>
                <button>Reset</button>
            </ul>
        </div>
    );
};

export default Controls;
