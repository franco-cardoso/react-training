type CommentType = {
    id: number;
    user: string;
    comment: string;
    upvoot: number;
    downvoot: number;
    date: number;
    replies: CommentType[];
};

export type { CommentType };
