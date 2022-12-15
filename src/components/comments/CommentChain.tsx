import React, { useState } from "react";
import Comment from "./Comment";
import { CommentType } from "../../types/types";

const CommentChain = (props: { chain: CommentType }) => {
    let { chain } = props;
    const [isHidden, setIsHidden] = useState(false);

    return (
        <div className="commentChainContainer">
            {!isHidden && (
                <>
                    <div className="collapseChain" onClick={() => setIsHidden(true)} >
                        <div/>
                    </div>
                    <div className="chainContent">
                        <div>
                            <Comment
                                user={chain.user}
                                comment={chain.comment}
                                upvoot={chain.upvoot}
                                downvoot={chain.downvoot}
                            />
                        </div>

                        <div className="replyChain">
                            {chain.replies.map((item, i) => (
                                <div>
                                    <CommentChain chain={item} key={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {isHidden && (
                <div className="collapsedCommentChain">
                    <button onClick={() => setIsHidden(false)}></button>
                    <p>
                        {chain.user}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CommentChain;
