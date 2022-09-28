import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { USER_ROLES } from "../types";

dotenv.config();

// Gera tokens e gera payloads = encriptar/decriptar
// Utiliza nos endpoints protegidos e signup/login

// Caso de uso que não utiliza esse arquivo: endpoints públicos

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
}

class Authenticator {

    generateToken(payload: ITokenPayload) {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN
            }
        );

        return token
    }

    verifyToken(token: string) {

        const payload: ITokenPayload = jwt.verify(token, process.env.JWT_KEY as string) as any

        return payload
    }
}

export default Authenticator