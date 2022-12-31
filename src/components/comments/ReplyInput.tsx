import React, { useContext, useState } from "react";
import { CommentType } from "../../types/types";
import { CommentsContext } from "./CommentsSection";

const ReplyInput = (props: { id: number; setIsReply: Function }) => {
    const [data, setData] = useState("");
    const db = useContext(CommentsContext);

    return (
        <form className="replyContainer">
            <textarea name="reply" value={data} onChange={(e) => setData(e.target.value)}></textarea>
            <div className="replyButtons">
                <input type="button" value="Cancel" onClick={() => props.setIsReply(false)} />
                <input
                    type="button"
                    value="Reply"
                    onClick={() => {
                        db.setComments(addReply(db.db, { ...commentToAdd, comment: data }, props.id));
                        props.setIsReply(false);
                    }}
                />
            </div>
        </form>
    );
};

const commentToAdd: CommentType = {
    id: 4,
    user: "NewUser",
    comment: "",
    date: Date.now(),
    upvoot: 0,
    downvoot: 0,
    replies: [],
};

const addReply = (state: CommentType[], comment: CommentType, id: number): CommentType[] => {
    let newState: CommentType[] = [];
    for (let i = 0; i < state.length; i++) {
        const element = state[i];
        if (element.id === id) {
            newState.push({ ...element, replies: [...element.replies, comment] });
        } else if (element.replies.length > 0) {
            newState.push({ ...element, replies: addReply(element.replies, comment, id) });
        } else newState.push(element);
    }
    return newState;
};

export default ReplyInput;
