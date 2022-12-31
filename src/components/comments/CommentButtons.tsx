import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ReplyInput from "./ReplyInput";

const CommentButtons = (props:{id:number}) => {
    const [isReply, setIsReply] = useState<boolean>(false);

    return (
        <div className="commentButtonsContainer">
            <ul>
                <button onClick={() => setIsReply(!isReply)}>Reply</button>
                <button>Share</button>
                <button>Report</button>
            </ul>
            <AnimatePresence>{isReply && <ReplyInput id={props.id} setIsReply={setIsReply} />}</AnimatePresence>
        </div>
    );
};

export default CommentButtons;
