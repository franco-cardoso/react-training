import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { formatScore } from "../../utility/utility";

const Voting = ({ upvoot, downvoot }: { upvoot: number; downvoot: number }) => {
    const [voteState, setVoteState] = useState<number>(0);
    const score = upvoot - downvoot + voteState;

    return (
        <div className="commentPoints">
            <button
                onClick={() => {
                    if (voteState === 1) return setVoteState(0);
                    setVoteState(1);
                }}
            >
                <AiOutlineArrowUp color={voteState > 0 ? "#ff6600" : "#d9d9d9"} />
            </button>

            <p style={{ color: voteState > 0 ? "#ff6600" : voteState < 0 ? "#3f6ad8" : "#d9d9d9" }}>
                {formatScore(score)}
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
    );
};

export default Voting;
