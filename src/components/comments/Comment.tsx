import CommentButtons from "./CommentButtons";
import "./comments.css";
import Voting from "./Voting";

const Comment = (props: { id: number; user: string; comment: string; upvoot: number; downvoot: number }) => {
    const { id, user, comment, upvoot, downvoot } = props;

    return (
        <div className="commentContainer">
            <Voting upvoot={upvoot} downvoot={downvoot} />
            <div>
                <h3>{user}</h3>
                <p>{comment}</p>
                <CommentButtons id={id} />
            </div>
        </div>
    );
};

export default Comment;
