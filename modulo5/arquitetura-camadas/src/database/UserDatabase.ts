import { BaseDatabase } from "./BaseDatabase"
import { User } from "../models/User"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public async userSignUp(user: User) {
        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }).into("Arq_Users")
    }

    public async getByEmail(email: string) {
        const result = await this.getConnection()
            .select("*")
            .from('Arq_Users')
            .where({email: email})

        return result[0]
    }
}