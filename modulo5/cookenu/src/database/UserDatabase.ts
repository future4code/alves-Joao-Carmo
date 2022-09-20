import User from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public async userSignUp(user: User) {
        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        }).into("cookenu_users")
    }

    public async getByEmail(email: string) {
        const result = await this.getConnection()
            .select("*")
            .from('cookenu_users')
            .where({email: email})

        return result[0]
    }

    public async getById(id: string) {
        const result = await this.getConnection()
            .select("*")
            .from('cookenu_users')
            .where({id: id})

        return result[0]
    }
}