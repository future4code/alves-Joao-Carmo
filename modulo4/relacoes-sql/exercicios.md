## Exercício 1
### a)
FOREIGN KEY é PRIMARY KEY da tabela referenciada.
### b)
    CREATE TABLE Rating (
            id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
            rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
    )
### c)
    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-joao-carmo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
### d)
    ALTER TABLE Filmes DROP COLUMN avaliacao
### e)
    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-joao-carmo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

## Exercício 2
### a)
A tabela vai conter linhas com um ator e o filme em que ele participa.

### b)
Ta criado.

### c)
    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-joao-carmo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

### d)
    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-joao-carmo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

## Exercício 3
### a)
A query junta as duas tabelas relacionando os ids das linhas. O operador ON define onde as tabelas se juntam.

### b) 
    SELECT nome, rate, Filmes.id FROM Filmes 
    INNER JOIN Rating ON Filmes.id = Rating.movie_id