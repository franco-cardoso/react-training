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
                                id={chain.id}
                                data={chain}
                            />
                        </div>

                        <div className="replyChain">
                            {sortComments(chain.replies, sorting).map((item) => (
                                <div key={item.id} >
                                    <CommentChain chain={item} sorting={sorting} />
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
