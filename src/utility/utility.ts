import { CommentType } from "../types/types";

const randomNum = (max: number): number => Math.round(Math.random() * max);

const sortComments = (data: CommentType[], sort: string): CommentType[] => {
    const scoreSort = data.sort((a, b) => a.upvoot - a.downvoot - (b.upvoot - b.downvoot));

    switch (sort) {
        case "top":
            return scoreSort.reverse();
        case "bottom":
            return scoreSort;
        default:
            return [];
    }
};

export { randomNum, sortComments };
