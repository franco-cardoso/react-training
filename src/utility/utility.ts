import { CommentType } from "../types/types";

const randomNum = (max: number): number => Math.round(Math.random() * max);

const formatScore = (score: number): string | number => {
    // const absolute = Math.abs(score);
    // if (absolute < 1000) return score;
    // return `${score < 0 ? "-" : ""}${String(absolute)[0]}.${String(absolute)[1]}k`;ç
    return Math.abs(score) > 999 ? Math.sign(score)*(+(Math.abs(score)/1000).toFixed(1)) + 'k' : Math.sign(score)*Math.abs(score)
};

const sortComments = (data: CommentType[], sort: string): CommentType[] => {
    if (!data) return;
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

export { randomNum, sortComments, formatScore };
