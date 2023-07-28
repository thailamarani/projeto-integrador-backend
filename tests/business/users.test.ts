import { UserBusiness } from '../../src/business/UserBusiness';
import { UserDatabaseMock } from '../mock/database/UserDatabaseMock';
import { IdGeneratorMock } from '../mock/services/IdGeneratorMock';
import { TokenManagerMock } from '../mock/services/TokenManagerMock';
import { HashManagerMock } from '../mock/services/HashManagerMock'
import { LoginSchema } from '../../src/dtos/user/login.dto';
import { SignupSchema } from '../../src/dtos/user/signup.dto';

describe("Teste de Signup", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Gerar um token ao fazer signup", async () => {
        const input = SignupSchema.parse({
            nickname: "User",
            email: "user@email.com",
            password: "user123"
        })
        const output = await userBusiness.signup(input)
        expect(output).toEqual({ token: "token-mock" })
    })
});

describe("Teste de login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Gerar um token ao fazer login", async () => {
        const input = LoginSchema.parse({
            email: "user@email.com",
            password: "hash-mock-user"
        })
        const output = await userBusiness.login(input)
        expect(output).toEqual({ token: "token-mock-user" })
    })
});