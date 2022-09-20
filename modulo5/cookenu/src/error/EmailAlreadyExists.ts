import { BaseError } from "./BaseError";

export class EmailAlredyExists extends BaseError { 
    constructor(){
        super("Email ja cadastrado", 401)
    }
}