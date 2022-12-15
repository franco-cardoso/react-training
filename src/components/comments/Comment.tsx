import "./comments.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";

const Comment = (props: { user: string; comment: string; upvoot: number; downvoot: number }) => {
    const { user, comment, upvoot, downvoot } = props;
    const [voteState, setVoteState] = useState(0);
    const score = upvoot - downvoot + voteState;

    return (
        <div className="commentContainer">
            <div className="commentPoints">
                <button
                    onClick={() => {
                        if (voteState === 1) return setVoteState(0);
                        setVoteState(1);
                    }}
                >
                    <AiOutlineArrowUp color={voteState > 0 ? "#ff6600" : "#d9d9d9"} />
                </button>

                <p style={{ color: voteState > 0 ? "#ff6600" : voteState < 0 ? "#003ed9" : "#d9d9d9" }}>
                    {Math.abs(score) > 999
                        ? `${score < 0 ? "-" : ""}${String(Math.abs(score))[0]}.${String(Math.abs(score))[1]}k`
                        : score}
                </p>

                <button
                    onClick={() => {
                        if (voteState === -1) return setVoteState(0);
                        setVoteState(-1);
                    }}
                >
                    <AiOutlineArrowDown color={voteState < 0 ? "#003ed9" : "#d9d9d9"} />
                </button>
            </div>
            <div>
                <h3>{user}</h3>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Comment;
