import { CommentType } from "../../types/types";
import { randomNum } from "../../utility/utility";
import CommentChain from "./CommentChain";

const CommentsSection = () => {
    const data = comments.sort((a, b) => a.upvoot - a.downvoot - (b.upvoot - b.downvoot));
    data.reverse();

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

const MAX_UPVOOT = 5000;
const MIN_UPVOOT = 1000;

const comments: CommentType[] = [
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: randomNum(MAX_UPVOOT),
        downvoot: randomNum(MIN_UPVOOT),
        replies: [
            {
                user: "SomeUser",
                comment:
                    "this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment this is a comment ",
                upvoot: randomNum(MAX_UPVOOT),
                downvoot: randomNum(MIN_UPVOOT),
                replies: [
                    {
                        user: "SomeUser",
                        comment: "this is a comment",
                        upvoot: randomNum(MAX_UPVOOT),
                        downvoot: randomNum(MIN_UPVOOT),
                        replies: [],
                    },
                    {
                        user: "SomeUser",
                        comment: "this is a comment",
                        upvoot: randomNum(MAX_UPVOOT),
                        downvoot: randomNum(MIN_UPVOOT),
                        replies: [
                            {
                                user: "SomeUser",
                                comment: "this is a comment",
                                upvoot: randomNum(MAX_UPVOOT),
                                downvoot: randomNum(MIN_UPVOOT),
                                replies: [
                                    {
                                        user: "SomeUser",
                                        comment: "this is a comment",
                                        upvoot: randomNum(MAX_UPVOOT),
                                        downvoot: randomNum(MIN_UPVOOT),
                                        replies: [
                                            {
                                                user: "SomeUser",
                                                comment: "this is a comment",
                                                upvoot: randomNum(MAX_UPVOOT),
                                                downvoot: randomNum(MIN_UPVOOT),
                                                replies: [
                                                    {
                                                        user: "SomeUser",
                                                        comment: "this is a comment",
                                                        upvoot: randomNum(MAX_UPVOOT),
                                                        downvoot: randomNum(MIN_UPVOOT),
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
                        upvoot: randomNum(MAX_UPVOOT),
                        downvoot: randomNum(MIN_UPVOOT),
                        replies: [],
                    },
                ],
            },
            {
                user: "SomeUser",
                comment: "this is a comment",
                upvoot: randomNum(MAX_UPVOOT),
                downvoot: randomNum(MIN_UPVOOT),
                replies: [],
            },
        ],
    },
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: randomNum(MAX_UPVOOT),
        downvoot: randomNum(MIN_UPVOOT),
        replies: [
            {
                user: "SomeUser",
                comment: "this is a comment",
                upvoot: randomNum(MAX_UPVOOT),
                downvoot: randomNum(MIN_UPVOOT),
                replies: [],
            },
            {
                user: "SomeUser",
                comment: "this is a comment",
                upvoot: randomNum(MAX_UPVOOT),
                downvoot: randomNum(MIN_UPVOOT),
                replies: [
                    {
                        user: "SomeUser",
                        comment: "this is a comment",
                        upvoot: randomNum(MAX_UPVOOT),
                        downvoot: randomNum(MIN_UPVOOT),
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: randomNum(MAX_UPVOOT),
        downvoot: randomNum(MIN_UPVOOT),
        replies: [],
    },
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: randomNum(MAX_UPVOOT),
        downvoot: randomNum(MIN_UPVOOT),
        replies: [
            {
                user: "SomeUser",
                comment: "this is a comment",
                upvoot: randomNum(MAX_UPVOOT),
                downvoot: randomNum(MIN_UPVOOT),
                replies: [],
            },
            {
                user: "SomeUser",
                comment: "this is a comment",
                upvoot: randomNum(MAX_UPVOOT),
                downvoot: randomNum(MIN_UPVOOT),
                replies: [
                    {
                        user: "SomeUser",
                        comment: "this is a comment",
                        upvoot: randomNum(MAX_UPVOOT),
                        downvoot: randomNum(MIN_UPVOOT),
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        user: "SomeUser",
        comment: "this is a comment",
        upvoot: randomNum(MAX_UPVOOT),
        downvoot: randomNum(MIN_UPVOOT),
        replies: [
            {
                user: "SomeUser",
                comment: "this is a comment",
                upvoot: randomNum(MAX_UPVOOT),
                downvoot: randomNum(MIN_UPVOOT),
                replies: [
                    {
                        user: "SomeUser",
                        comment: "this is a comment",
                        upvoot: randomNum(MAX_UPVOOT),
                        downvoot: randomNum(MIN_UPVOOT),
                        replies: [],
                    },
                ],
            },
            {
                user: "SomeUser",
                comment: "this is a comment",
                upvoot: randomNum(MAX_UPVOOT),
                downvoot: randomNum(MIN_UPVOOT),
                replies: [],
            },
        ],
    },
];

export default CommentsSection;
