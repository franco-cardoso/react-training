import Bar from "./Bar";
import Controls from "./Controls";
import "./progressbar.css";
import { useState } from "react";

const ProgressBar = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    return (
        <div>
            <Bar isLoading={isLoading} />
            <Controls progress={progress} setProgress={setProgress} setIsLoading={setIsLoading} />
        </div>
    );
};

export default ProgressBar;
