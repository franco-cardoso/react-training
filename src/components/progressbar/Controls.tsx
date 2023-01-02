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
                        // setProgress(0.1 + Math.random() * 0.6);
                        if (progress === 0) setProgress(0.001);
                        setIsLoading(true);
                    }}
                >
                    Start
                </button>
                <button onClick={() => setIsLoading(false)}>Stop</button>
                <button
                    onClick={() => {
                        setIsLoading(false);
                        setProgress(0);
                    }}
                >
                    Reset
                </button>
            </ul>
        </div>
    );
};

export default Controls;
