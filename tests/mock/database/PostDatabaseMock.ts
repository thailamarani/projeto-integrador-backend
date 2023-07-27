import { BaseDatabase } from '../../../src/database/BaseDatabase';
import { PostDB, PostVoteDB } from '../../../src/models/Post';

const postMock: PostDB[] = [
    {
        id: "id-mock-post",
        content: "Mock de post",
        votes_count: 1,
        comments_count: 0,
        creator_id: "id-mock-user",
        created_at: new Date().toISOString()
    }
];

const postVoteMock: PostVoteDB[] = [
    {
        post_id: "id-mock-post",
        user_id: "id-mock-fulano",
        vote: 1
    }
];

export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "posts"
    public static TABLE_POSTS_VOTES = "posts_votes"

    public insertPost = async (postDB: PostDB): Promise<void> => { };

    public getPosts = async (): Promise<PostDB[]> => {
        return postMock
    };

    public findById = async (id: string): Promise<PostDB | undefined> => {
        return postMock.filter(post => post.id === id)[0]
    };

    public updatePost = async (postDB: PostDB): Promise<void> => { };

    public findPostVote = async (postId: string, userId: string): Promise<PostVoteDB | undefined> => {
        return postVoteMock.filter(postVote => (
            postVote.post_id === postId
            && postVote.user_id === userId
        ))[0]
    };

    public insertPostVote
        = async (postId: string, userId: string, vote: Number): Promise<void> => { };

    public updatePostVote
        = async (postId: string, userId: string, vote: number): Promise<void> => { };

    public deletePostVote
        = async (postId: string, userId: string): Promise<void> => { };
};