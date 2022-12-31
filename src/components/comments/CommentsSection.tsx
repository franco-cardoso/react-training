import { createContext, useEffect, useState } from "react";
import { CommentType } from "../../types/types";
import { sortComments } from "../../utility/utility";
import CommentChain from "./CommentChain";
export const CommentsContext = createContext(null);

const CommentsSection = () => {
    // const [sorting, setSorting] = useState<string>("top");
    const [comments, setComments] = useState<CommentType[]>(db);
    const sorting = "new";

    return (
        <section className="commentsSection">
            <CommentsContext.Provider value={{ db: comments, setComments: setComments }}>
                <div className="commentsContainer">
                    {sortComments(comments, sorting).map((item) => (
                        <div style={{ marginBottom: "20px" }} key={item.id}>
                            <CommentChain chain={item} sorting={sorting} />
                        </div>
                    ))}
                </div>
            </CommentsContext.Provider>
        </section>
    );
};

const db: CommentType[] = [
    {
        id: 1,
        user: "Mike",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        upvoot: 489,
        downvoot: 58,
        date: Date.now() - 1 * 1000 * 3600 * 7,
        replies: [
            {
                id: 2,
                user: "user-name498",
                comment:
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
                upvoot: 290,
                downvoot: 58,
                date: Date.now() - 1 * 1000 * 3600 * 4,
                replies: [
                    {
                        id: 5,
                        user: "someone8499",
                        comment:
                            "Aliquam consequat quam nec diam commodo tristique.",
                        upvoot: 80,
                        downvoot: 58,
                        date: Date.now() - 1 * 1000 * 3600 * 3,
                        replies: [],
                    },
                ],
            },
            {
                id: 4,
                user: "person8",
                comment:
                    "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
                upvoot: 224,
                downvoot: 42,
                date: Date.now() - 1 * 1000 * 3600 * 6,
                replies: [],
            },
        ],
    },
    {
        id: 3,
        user: "Commenter447",
        comment: "Et harum quidem rerum facilis est et expedita distinctio.",
        upvoot: 260,
        downvoot: 80,
        date: Date.now() - 1 * 1000 * 3600 * 8,
        replies: [],
    },
];

export default CommentsSection;
