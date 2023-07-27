import { CommentBusiness } from '../../src/business/CommentBusiness';
import { CreateCommentSchema } from '../../src/dtos/comment/createComment.dto';
import { CommentDatabaseMock } from '../mock/database/CommentDatabaseMock';
import { PostDatabaseMock } from '../mock/database/PostDatabaseMock';
import { UserDatabaseMock } from '../mock/database/UserDatabaseMock';
import { IdGeneratorMock } from '../mock/services/IdGeneratorMock';
import { TokenManagerMock } from '../mock/services/TokenManagerMock';

describe("Teste de createComment", () => {
    const commentBusiness = new CommentBusiness(
        new CommentDatabaseMock(),
        new PostDatabaseMock(),
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock()
    )

    test("Criar um comentário", async () => {
        const input = CreateCommentSchema.parse({
            token: "token-mock-fulano",
            postId: "id-mock-post",
            content: "Comment de teste"
        })
        const output = await commentBusiness.createComment(input)
        expect(output).toEqual(undefined)
    })
});