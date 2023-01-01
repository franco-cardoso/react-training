import { CommentType } from "../../types/types";
import CommentButtons from "./CommentButtons";
import "./comments.css";
import Voting from "./Voting";

const Comment = (props: { id: number; data: CommentType}) => {
    const { id, user, comment, upvoot, downvoot } = props.data;

    return (
        <div className="commentContainer">
            <Voting upvoot={upvoot} downvoot={downvoot} />
            <div>
                <h3 style={{ color: user === "NewUser" ? "#9da6d4" : "" }}>{user}</h3>
                <p>{comment}</p>
                <CommentButtons id={id} />
            </div>
        </div>
    );
};

export default Comment;
