import "./comments.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";

const Comment = (props: { user: string; comment: string; upvoot: number; downvoot: number }) => {
    const { user, comment, upvoot, downvoot } = props;
    const baseScore = upvoot - downvoot;
    const [score, setScore] = useState(baseScore);

    return (
        <div className="commentContainer">
            <div className="commentPoints">
                <button onClick={() => setScore(score > baseScore ? baseScore : baseScore + 1)}>
                    <AiOutlineArrowUp color={score > baseScore ? "#ff6600" : "#d9d9d9"} />
                </button>
                <p style={{ color: score > baseScore ? "#ff6600" : score < baseScore ? "#003ed9" : "#d9d9d9" }}>
                    {Math.abs(score) > 999
                        ? `${score < 0 ? "-" : ""}${String(Math.abs(score))[0]}.${String(Math.abs(score))[1]}k`
                        : score}
                </p>
                <button onClick={() => setScore(score < baseScore ? baseScore : baseScore - 1)}>
                    <AiOutlineArrowDown color={score < baseScore ? "#003ed9" : "#d9d9d9"} />
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
