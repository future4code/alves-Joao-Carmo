import { BaseError } from "./BaseError";

export class InvalidCredencial extends BaseError {
    constructor() {
        super('Credenciais inválidas.', 401)
    }
}