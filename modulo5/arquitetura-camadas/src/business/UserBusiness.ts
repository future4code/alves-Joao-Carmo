import { UserDatabase } from "../database/UserDatabase"

export class UserBusiness {
    public checkName(name: string): boolean {
        if (name.length < 3 || !name) {
            return false
        } else {
            return true
        }
    }

    public checkPassword(password: string): boolean {
        if (password.length < 6 || !password) {
            return false
        } else {
            return true
        }
    }

    public checkEmail(email: string): boolean {
        const user = new UserDatabase().getByEmail(email)
        if (email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && user) {
            return true
        } else {
            return false
        }
    }
}