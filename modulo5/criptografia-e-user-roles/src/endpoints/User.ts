import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/IncorrectPassword";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { USER_ROLES } from "../types";

class UserEndpoint {

    public async createUser(req: Request, res: Response) {
        try {
            const { name, nickname, email, password, role } = req.body

            if (!name || !nickname || !email || !password) {
                throw new MissingFields()
            }

            const userDataBase = new UserDatabase()

            const userDB = await userDataBase.getUserByEmail(email)

            if (userDB) {
                throw new EmailExist()
            }

            const id = new GenerateId().createId();

            // const user = new User(id, name, nickname, email, password)

            const hashManager = new HashManager()
            const hash = await hashManager.hash(password)

            const user = new User(id, name, nickname, email, hash, role)

            await userDataBase.createUser(user)

            const payload: ITokenPayload = {
                id,
                role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(201).send({ message: "Usuario cadastrado com sucesso", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {

            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }

            const userData = new UserDatabase()

            const userDB = await userData.getUserByEmail(email)

            if (!userDB) {
                throw new InvalidCredencial();
            }

            // if (userDB.password !== password) {
            //     throw new InvalidCredencial();
            // }
        
            const hashManager = new HashManager()
            const isPasswordCorrect = await hashManager.compare(password, userDB.password)

            if (!isPasswordCorrect) {
                throw new InvalidCredencial();
            }

            const payload: ITokenPayload = {
                id: userDB.id,
                role: userDB.role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async editUser(req: Request, res: Response) {
        try {
            // const token = req.headers.authorization as string
            const token = req.headers.authorization!
            const { nickname } = req.body

            const payload = new Authenticator().verifyToken(token)

            const userData = new UserDatabase()

            await userData.edit(payload.id,nickname)

            res.status(200).send("Atualizado com sucesso!")

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            const token = req.headers.authorization

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            if (payload.role !== USER_ROLES.ADMIN) {
                throw new Error("Autorização insuficiente")
            }

            const userData = new UserDatabase()
            const usersDB = await userData.getUsers()

            res.status(200).send({ users: usersDB })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint



