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
                // style={{ width: "100%" }}
                // style={{width:'100px'}}
                className="bar"
                // ref={barRef}
                initial={{ width: 0 }}
                animate={{ width: width * progress }}
                transition={{ duration: 0.001, type: "tween" }}
            ></motion.div>
            <div style={{ width: "100%" }} ref={barRef}></div>
        </div>
    );
};

export default Bar;
