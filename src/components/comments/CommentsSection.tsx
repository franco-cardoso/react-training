import { createContext, useEffect, useState } from "react";
import { CommentType } from "../../types/types";
import { sortComments } from "../../utility/utility";
import CommentChain from "./CommentChain";
const CommentsContext = createContext("");

const CommentsSection = () => {
    // const [sorting, setSorting] = useState<string>("top");
    const [comments, setcomments] = useState<CommentType[]>(db);
    const sorting = "top";

    return (
        <section className="commentsSection">
            {/* <div>
                <select name="selectSort" id="" onChange={(e) => setSorting(e.target.value)}>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                    <option value="test">TestValue</option>
                </select>
            </div> */}
            <button onClick={() => setcomments(addReply(comments, commentToAdd, 2))}>test</button>

            <CommentsContext.Provider value={""}>
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
        date: Date.now() - 1 * 1000 * 3600 * 5,
        replies: [
            {
                id: 2,
                user: "user-name498",
                comment:
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
                upvoot: 390,
                downvoot: 58,
                date: Date.now() - 1 * 1000 * 3600 * 5,
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
        date: Date.now() - 1 * 1000 * 3600 * 5,
        replies: [],
    },
];

const commentToAdd = {
    id: 3,
    user: "eeeeeee",
    comment: "eeeeeeeeeeeeeeeeeeeeee",
    upvoot: 260,
    downvoot: 80,
    date: Date.now() - 1 * 1000 * 3600 * 5,
    replies: [],
};

const addReply = (state: CommentType[], comment: CommentType, id: number): CommentType[] => {
    let newState: CommentType[] = [];
    for (let i = 0; i < state.length; i++) {
        const element = state[i];
        if (element.id === id) {
            newState.push({ ...element, replies: [...element.replies, comment] });
        } else if (element.replies.length > 0) {
            newState.push({ ...element, replies: addReply(element.replies, comment, id) });
        } else newState.push(element);
    }
    return newState;
};

export default CommentsSection;
