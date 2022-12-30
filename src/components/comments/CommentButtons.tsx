import { useState } from "react";
import ReplyInput from "./ReplyInput";

const CommentButtons = () => {
    const [isReply, setIsReply] = useState<boolean>(false);

    return (
        <div className="commentButtonsContainer">
            <ul>
                <button>Reply</button>
                <button>Share</button>
                <button>Report</button>
            </ul>
            <ReplyInput />
        </div>
    );
};

export default CommentButtons;
