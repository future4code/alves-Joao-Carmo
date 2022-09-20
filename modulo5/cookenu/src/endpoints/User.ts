import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { MissingFields } from "../error/MissingFields";
import { EmailAlredyExists } from "../error/EmailAlreadyExists";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { InvalidId } from "../error/InvalidId";

class UserEndpoint {

    public async signUp(
        req: Request, res: Response
    ): Promise<void> {
        try {
            const { name, email, password } = req.body
            if (!name || !email || !password) {
                throw new MissingFields()
            }

            const userDB = new UserDatabase()

            const invalidEmail = await userDB.getByEmail(email)
            if (invalidEmail) {
                throw new EmailAlredyExists()
            }

            const id = new GenerateId().createId()

            const hashManager = new HashManager()
            const hash = await hashManager.hash(password)

            const user = new User(id, name, email, hash)
            await userDB.userSignUp(user)

            const token = new Authenticator().generateToken(id)

            res.status(201).send({ access_token: token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                throw new MissingFields()
            }

            const userDB = new UserDatabase()
            const user = await userDB.getByEmail(email)

            if (!user) {
                throw new InvalidCredencial()
            }

            const hashManager = new HashManager()
            const checkPassword = await hashManager.compare(password, user.password)

            if (!checkPassword) {
                throw new InvalidCredencial()
            }

            const token = new Authenticator().generateToken(user.id)

            res.status(200).send({ access_token: token })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        try {

            const token = req.headers.authorization!
            if (!token) {
                throw new InvalidCredencial()
            }
            const id = new Authenticator().verifyToken(token)

            const user = await new UserDatabase().getById(id)

            res.status(200).send({
                id,
                name: user.name,
                email: user.email
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public async getOtherUser(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization!
            if (!token) {
                throw new InvalidCredencial()
            }

            const { id } = req.params

            const user = await new UserDatabase().getById(id)
            if (!user) {
                throw new InvalidId()
            }
            
            res.status(200).send({
                id,
                name: user.name,
                email: user.email
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint