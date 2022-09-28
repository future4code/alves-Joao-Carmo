import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserDatabase } from "../database/UserDatabase"
import { User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserController {

    public signUp = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const userBusiness = new UserBusiness()
            const { name, email, password } = req.body
            if (!userBusiness.checkEmail(email) || !userBusiness.checkPassword(password) || !userBusiness.checkName(name)) {
                errorCode = 404
                throw new Error('Informações inválidas')
            }

            const userDB = new UserDatabase()
            const id = new IdGenerator().generate()
            const hashManager = new HashManager()
            const hash = await hashManager.hash(password)

            const payload: ITokenPayload = {
                id: id,
                role: USER_ROLES.NORMAL
            }

            const token = new Authenticator().generateToken(payload)

            const user = new User(id, name, email, hash, USER_ROLES.NORMAL)
            await userDB.userSignUp(user)

            res.status(201).send({ message: 'Usuário criado com sucesso.', access_token: token})

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        let errorCode= 400
        try {
            const userBusiness = new UserBusiness()
            const { email, password } = req.body
            if(!userBusiness.checkEmail(email) || !userBusiness.checkPassword(password)) {
                errorCode = 404
                throw new Error('Informações inválidas')
            }

        const userDB = new UserDatabase()
        const user = await userDB.getByEmail(email)

        if (!user) {
            throw new Error('Email não cadastrado.')
        }

        const hashManager = new HashManager()
        const checkPassword = await hashManager.compare(password, user.password)

        if (!checkPassword) {
            throw new Error('Senha incorreta.')
        }

        const payload: ITokenPayload = {
            id: user.id,
            role: user.role
        }

        const token = new Authenticator().generateToken(payload)

        res.status(200).send({message: 'Login efetuado com sucesso', access_token: token})

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}