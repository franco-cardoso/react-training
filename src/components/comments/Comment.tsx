import CommentButtons from "./CommentButtons";
import "./comments.css";
import Voting from "./Voting";

const Comment = (props: { user: string; comment: string; upvoot: number; downvoot: number }) => {
    const { user, comment, upvoot, downvoot } = props;

    return (
        <div className="commentContainer">
            <Voting upvoot={upvoot} downvoot={downvoot} />
            <div>
                <h3>{user}</h3>
                <p>{comment}</p>
                <CommentButtons />
            </div>
        </div>
    );
};


export default Comment;
