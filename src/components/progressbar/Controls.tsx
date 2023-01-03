import Button from "../../utility/Button";

type PropTypes = {
    setIsLoading: Function;
    progress: number;
    setProgress: Function;
};

const Controls = (props: PropTypes) => {
    const { setIsLoading, progress, setProgress } = props;

    return (
        <div className="controls-container">
            <ul>
                <Button
                    onClick={() => {
                        // setProgress(0.1 + Math.random() * 0.6);
                        // if (progress === 0) setProgress(0);
                        setIsLoading(true);
                    }}
                >
                    Start
                </Button>
                <Button onClick={() => setIsLoading(false)}>Stop</Button>
                <Button
                    onClick={() => {
                        setIsLoading(false);
                        setProgress(0);
                    }}
                >
                    Reset
                </Button>
            </ul>
        </div>
    );
};

export default Controls;
