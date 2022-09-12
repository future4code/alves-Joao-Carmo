import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import axios from "axios"
import {baseURL} from "./baseURL"
import {user} from "./types"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

const getSubscribers = async (): Promise<user[]> => {
   const response = await axios.get(`${baseURL}/subscribers`)
   return response.data.map((res: any) => {
     return {
       id: res.id,
       name: res.name,
       email: res.email,
     }
   })
 }

const createNews = async (title: string, content: string, date: number): Promise<void> => {
   const body = {
      title,
      content,
      date
   }
   await axios.put(`${baseURL}/news`, body)
}

const main = async ():Promise<void> => {
   try {
       const resp = await getSubscribers()
       console.log(resp)
   } catch (error: any) {
       const resp = error.response?.data || error.message
       console.log(resp)
   }
}

main()