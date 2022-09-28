import { BaseError } from "./BaseError";

export class InvalidId extends BaseError{
    constructor() {
        super("Id inválido, item não encontrado", 404)
    }
}