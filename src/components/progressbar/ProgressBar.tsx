import Bar from "./Bar";
import Controls from "./Controls";
import "./progressbar.css";
import { useState } from "react";

const ProgressBar = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div>
            <Bar />
            <Controls />
        </div>
    );
};

export default ProgressBar;
