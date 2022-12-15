import { CommentType } from "../../types/types";
import CommentChain from "./CommentChain";

const CommentsSection = () => {
    const data = comments.sort((a, b) => {
        return a.upvoot + b.upvoot;
    });

    return (
        <div className="commentsContainer">
            {data.map((item, i) => (
                <div style={{ marginBottom: "20px" }}>
                    <CommentChain chain={item} key={i} />
                </div>
            ))}
        </div>
    );
};

const comments: CommentType[] = [
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: 483,
        downvoot: 48,
        replies: [
            {
                user: "SomeUser",
                comment:
                    "this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment ",
                upvoot: 483,
                downvoot: 48,
                replies: [
                    {
                        user: "SomeUser",
                        comment: "this is a comment",
                        upvoot: 483,
                        downvoot: 48,
                        replies: [],
                    },
                    {
                        user: "SomeUser",
                        comment: "this is a comment",
                        upvoot: 483,
                        downvoot: 48,
                        replies: [
                            {
                                user: "SomeUser",
                                comment: "this is a comment",
                                upvoot: 483,
                                downvoot: 48,
                                replies: [
                                    {
                                        user: "SomeUser",
                                        comment: "this is a comment",
                                        upvoot: 483,
                                        downvoot: 48,
                                        replies: [
                                            {
                                                user: "SomeUser",
                                                comment: "this is a comment",
                                                upvoot: 483,
                                                downvoot: 48,
                                                replies: [
                                                    {
                                                        user: "SomeUser",
                                                        comment: "this is a comment",
                                                        upvoot: 483,
                                                        downvoot: 48,
                                                        replies: [],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        user: "SomeUser",
                        comment: "this is a comment",
                        upvoot: 483,
                        downvoot: 48,
                        replies: [],
                    },
                ],
            },
            {
                user: "SomeUser",
                comment: "this is a comment",
                upvoot: 483,
                downvoot: 48,
                replies: [],
            },
        ],
    },
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: 483,
        downvoot: 48,
        replies: [],
    },
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: 483,
        downvoot: 48,
        replies: [],
    },
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: 483,
        downvoot: 48,
        replies: [],
    },
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: 483,
        downvoot: 48,
        replies: [],
    },
];

export default CommentsSection;
