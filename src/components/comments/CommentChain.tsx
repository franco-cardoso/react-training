import { useState } from "react";
import Comment from "./Comment";
import { CommentType } from "../../types/types";
import { sortComments } from "../../utility/utility";

const CommentChain = (props: { chain: CommentType; sorting: string }) => {
    let { chain, sorting } = props;
    const [isHidden, setIsHidden] = useState(false);

    return (
        <div className="commentChainContainer">
            {!isHidden && (
                <>
                    <div className="collapseChain" onClick={() => setIsHidden(true)}>
                        <div />
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
                            {sortComments(chain.replies, sorting).map((item, i) => (
                                <div>
                                    <CommentChain chain={item} key={i} sorting={sorting} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {isHidden && (
                <div className="collapsedCommentChain">
                    <div className="collapseChain" onClick={() => setIsHidden(false)}>
                        <div style={{ height: "30px", width: "3px" }} />
                    </div>
                    <p className="chainContent">{chain.user}</p>
                </div>
            )}
        </div>
    );
};

export default CommentChain;
