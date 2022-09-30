import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

}