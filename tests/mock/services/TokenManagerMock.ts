import { TokenPayload } from '../../../src/models/User';

export class TokenManagerMock {
    public createToken = (payload: TokenPayload): string => {
        if (payload.id === "id-mock-user") {
            return "token-mock-user"
        } else {
            return "token-mock"
        }
    }

    public getPayload = (token: string): TokenPayload | null => {
        if (token === "token-mock-user") {
            return {
                id: "id-mock-user",
                nickname: "user"
            }
        } else {
            return null
        }
    }
};