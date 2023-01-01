import { motion } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";

const Bar = (props: { progress: number }) => {
    const { progress } = props;
    const [width, setWidth] = useState(0);
    const barRef = useRef(null);

    useLayoutEffect(() => {
        setWidth(barRef.current.offsetWidth);
    }, []);

    return (
        <div className="bar-container">
            <motion.div
                className="bar"
                ref={barRef}
                initial={{ visibility: "hidden" }}
                animate={{ visibility: progress === 0 ? "hidden" : "visible", width: width * progress }}
                transition={{ duration: progress === 0.001 ? 0 : 1, type: "tween" }}
            ></motion.div>
        </div>
    );
};

export default Bar;
