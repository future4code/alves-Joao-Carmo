## Exercício 1
### a)
O método raw nos permite usar linguagem SQL para fazer querys. A resposta vem em um array e as informações que queremos estão na primeira posição desse array.

### b) 
    const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)

        return result
    }

### c)
    const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    `)

        return result[0][0].count
    }

## Exercício 2
### a)
    const updateSalary = async (
    id: string,
    salary: number,
    ): Promise<void> => {
    await connection("Actor")
        .update({
        salary: salary,
        })
        .where("id", id);
    };

### b) 
    const deleteActor = async (
    id: string
    ): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
    };

### c)
    const avgSalary = async (
    gender: string
    ): Promise<void> => {
    await connection("Actor")
        .avg("salary as average")
        .where({ gender });

        return result[0].average;
    };

## Exercício 3
### a)
    app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

### b)
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

## Exercício 4
### a)
    app.put("/actor/", async (req, res) => {
    try {
        const {salary, id} = req.body
        await updateSalary(id, salary)
        res.status(200).send("Salário atualizado com sucessso.")
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
    })
### b)
    app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id);
    } catch (err) {
        res.status(400).send({
        message: err.message,
        })
    }
    })