type CommentType = {
    user: string;
    comment: string;
    upvoot: number;
    downvoot: number;
    replies: CommentType[];
};

export type { CommentType };
