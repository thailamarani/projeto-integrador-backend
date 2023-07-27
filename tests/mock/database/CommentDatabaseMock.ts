import { BaseDatabase } from '../../../src/database/BaseDatabase';
import { CommentDB, CommentVoteDB } from '../../../src/models/Comment';

const commentMock: CommentDB[] = [
    {
        id: "id-mock-comment",
        post_id: "id-mock-post",
        creator_id: "id-mock-user",
        content: "Mock de comment",
        votes_count: -1,
        created_at: new Date().toISOString()
    }
];

const commentVoteMock: CommentVoteDB[] = [
    {
        comment_id: "id-mock-comment",
        user_id: "id-mock-user",
        vote: 0
    }
];

export class CommentDatabaseMock extends BaseDatabase {
    public static TABLE_COMMENTS = "comments"
    public static TABLE_COMMENTS_VOTES = "comments_votes"

    public insertComment = async (commentDB: CommentDB): Promise<void> => { };

    public getPostComments = async (postId: string): Promise<CommentDB[]> => {
        return commentMock
    };

    public findById = async (id: string): Promise<CommentDB | undefined> => {
        return commentMock.filter(comment => comment.id === id)[0]
    };

    public updateComment = async (commentDB: CommentDB): Promise<void> => { };

    public findCommentVote = async (commentId: string, userId: string): Promise<CommentVoteDB | undefined> => {
        return commentVoteMock.filter(commentVote => (
            commentVote.comment_id === commentId
            && commentVote.user_id === userId
        ))[0]
    };

    public insertCommentVote
        = async (commentId: string, userId: string, vote: Number): Promise<void> => { };

    public updateCommentVote
        = async (commentId: string, userId: string, vote: number): Promise<void> => {  };

    public deleteCommentVote
        = async (commentId: string, userId: string): Promise<void> => { };

}