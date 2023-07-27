import { UserDB } from '../../../src/models/User';
import { BaseDatabase } from '../../../src/database/BaseDatabase';

const usersMock: UserDB[] = [
    {
        id: "id-mock-user",
        nickname: "user",
        email: "user@email.com",
        password: "hash-mock-user"
    }
];

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "users"

    public findByEmail = async (email: string): Promise<UserDB | undefined> => {
        return usersMock.filter(user => user.email === email)[0]
    };

    public findById = async (id: string): Promise<UserDB> => {
        return usersMock.filter(user => user.id === id)[0]
    };

    public insertUser = async (userDB: UserDB): Promise<void> => { };
};