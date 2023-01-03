import { AnimatePresence, motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Star = ({ permCurrent, active, ID, setCurrent, setPermCurrent }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                cursor: "pointer",
            }}
        >
            <span
                style={{ padding: "5px", margin: "0", width: "35px" }}
                onMouseEnter={() => setCurrent(ID)}
                onMouseLeave={() => setCurrent(permCurrent)}
                onClick={() => setPermCurrent(ID)}
            >
                {active && (
                    <motion.div
                        className="starCont"
                        animate={{ height: ["35px", "30px"] }}
                        transition={{ type: "keyframes" }}
                    >
                        <AiFillStar size={"100%"} color="yellow"></AiFillStar>
                    </motion.div>
                )}
                {!active && (
                    <motion.div
                        className="starCont"
                        animate={{ height: ["35px", "30px"] }}
                        transition={{ type: "keyframes" }}
                    >
                        <AiOutlineStar size={"100%"} color="yellow"></AiOutlineStar>
                    </motion.div>
                )}
            </span>
        </div>
    );
};

export default Star;
