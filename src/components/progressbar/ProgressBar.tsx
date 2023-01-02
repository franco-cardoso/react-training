import Bar from "./Bar";
import Controls from "./Controls";
import "./progressbar.css";
import { useEffect, useState, useRef } from "react";

const ProgressBar = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const interval = useRef(null);
    console.log(progress);

    useEffect(() => {
        if (progress >= 1) {
            setProgress(1);
            clearInterval(interval.current);
            interval.current = null;
        }
        // return () => clearInterval(interval.current);
    }, [progress]);

    useEffect(() => {
        if (isLoading) {
            // interval.current = setInterval(() => setProgress((prev) => prev + 0.01), 100);
            interval.current = setInterval(() => setProgress((prev) => prev + (0.1 + Math.random() * 0.6)), 2000);
        } else if (!isLoading) {
            clearInterval(interval.current);
            interval.current = null;
        }
    }, [isLoading]);

    // console.log(isLoading);

    // const loading = setInterval(() => {
    //     if (!isLoading) return;
    //     if (progress >= 1) return setProgress(1);
    //     setProgress(progress + (0.1 + Math.random() * 0.6));
    //     console.log("loading");
    // }, 5000);
    // useEffect(() => {
    //     if (progress >= 1) {
    //         setIsLoading(false);
    //         clearInterval(loading);
    //     }
    // }, [isLoading]);

    return (
        <div>
            <Bar progress={progress} />
            <Controls progress={progress} setProgress={setProgress} setIsLoading={setIsLoading} />
        </div>
    );
};

export default ProgressBar;
