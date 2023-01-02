import Bar from "./Bar";
import Controls from "./Controls";
import "./progressbar.css";
import { useEffect, useState, useRef } from "react";

const ProgressBar = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const interval = useRef(null);

    useEffect(() => {
        if (progress >= 1) {
            setProgress(1);
            clearInterval(interval.current);
            interval.current = null;
        }
    }, [progress]);

    useEffect(() => {
        if (isLoading) {
            interval.current = setInterval(() => setProgress((prev) => prev + 0.0006), 1);
            // interval.current = setInterval(() => setProgress((prev) => prev + (0.1 + Math.random() * 0.6)), 1000);
        } else if (!isLoading) {
            clearInterval(interval.current);
            interval.current = null;
        }
    }, [isLoading]);

    return (
        <div>
            <Bar progress={progress} />
            <Controls progress={progress} setProgress={setProgress} setIsLoading={setIsLoading} />
        </div>
    );
};

export default ProgressBar;
