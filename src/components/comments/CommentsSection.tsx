import { useState } from "react";
import { CommentType } from "../../types/types";
import { randomNum, sortComments } from "../../utility/utility";
import CommentChain from "./CommentChain";

const CommentsSection = () => {
    const [sorting, setSorting] = useState("top");

    return (
        <section className="commentsSection">
            <div>
                <select name="selectSort" id="" onChange={(e) => setSorting(e.target.value)}>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                </select>
            </div>

            <div className="commentsContainer">
                {sortComments(comments, sorting).map((item, i) => (
                    <div style={{ marginBottom: "20px" }}>
                        <CommentChain chain={item} sorting={sorting} key={i} />
                    </div>
                ))}
            </div>
        </section>
    );
};

const MAX_UPVOOT = 100;
const MIN_UPVOOT = 0;

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
