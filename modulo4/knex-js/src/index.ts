import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

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

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0]
}

const updateSalary = async (
  id: string,
  salary: number,
): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

// Ou então podemos chamá-la dentro de um endpoint
app.get("/actor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.put("/actor/:id", async (req, res) => {
  try {
    const id = req.params.id
    const salary = Number(req.body.salary)
    await updateSalary(id, salary)
    res.status(200).send("Salário atualizado com sucessso.")
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
  `)
  return result[0][0]
}

app.get("/actor", async (req, res) => {
  try {
    const gender = req.query.gender as string
    console.log(gender)
    const count = await countActorsByGender(gender)
    console.log(count)

    res.status(200).send({quantidade: count})
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});