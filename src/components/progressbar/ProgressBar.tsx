import Bar from "./Bar";
import Controls from "./Controls";
import "./progressbar.css";
import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    console.log(progress);

    const loading = setInterval(() => {
        if (!isLoading || progress >= 1) return;
        setProgress(progress + (0.1 + Math.random() * 0.6));
        console.log("loading");
    }, 1000);

    useEffect(() => {
        if (progress >= 1) {
            setIsLoading(false);
            clearInterval(loading);
        }
    }, [progress]);

    return (
        <div>
            <Bar progress={progress} />
            <Controls progress={progress} setProgress={setProgress} setIsLoading={setIsLoading} />
        </div>
    );
};

export default ProgressBar;
