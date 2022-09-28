import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor() {
        super("Valores passados incompletos.", 404)
    }
}