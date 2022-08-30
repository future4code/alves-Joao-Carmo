## Exercício 1
### a)
Deleta a coluna "salary" da tabela.

### b)
Troca o nome da coluna de "gender" para "sex" e o tipo para uma string de no máximo 6 caracteres.

### c)
Não altera o nome da coluna "gender" mas o tipo passa a ser uma string com no máximo 255 caracteres.

## Exercício 2
### a)
    UPDATE Actor
    SET name = "Alice Braga", birth_date = "1983-04-15"
    WHERE id = "003"

### b )
    UPDATE Actor
    SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes"

    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES"

### c)
    UPDATE Actor
    SET name = "JULIANA PAES", salary = 800000,
    birth_date = "1999-01-09",
    gender = "male"
    WHERE id = "005"

### d)
    UPDATE Actor
    SET name = "Alice Braga", birth_date = "1983-04-15"
    WHERE id = "009"

Com um id que não existe na tabela, o sql atualiza os dados, porém como a linha não existe, nada acontece, mesmo não dando erro.

## Exercício 3
### a)
    DELETE FROM Actor WHERE name = "Fernanda Montenegro"

### b) 
    DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

## Exercício 4
### a) 
    SELECT MAX(salary) FROM Actor

### b)
    SELECT MIN(salary) FROM Actor WHERE gender = "female"

### c)
    SELECT COUNT(*) FROM Actor WHERE gender = "female"

### d)
    SELECT SUM(salary) from Actor

## Exercício 5
### a)
A última query nos apresentará dois dados, o número de atores com gender = male, e o número com gender = female.

### b)
    SELECT id, name FROM Actor
    ORDER BY name DESC

### c)
    SELECT * FROM Actor
    ORDER BY salary ASC

### d)
    SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3

### e)
    SELECT AVG(salary), gender FROM Actor
    GROUP BY gender

## Exercício 6
### a)
    ALTER TABLE Movie ADD playing_limit_date DATE

### b)
    ALTER TABLE Movie CHANGE rating rating FLOAT

### c) 
    UPDATE Movie
    SET playing_limit_date = "2022-08-31"
    WHERE id = "001"

    UPDATE Movie
    SET playing_limit_date = "2022-02-20"
    WHERE id = "002"

### d)
    DELETE FROM Movie WHERE id = "001"

    UPDATE Movie
    SET synopsis = "Lorem ipsum lorem ipsum"
    WHERE id = "001"

Não apresenta erro porém nenhuma linha é atualizada.

## Exercício 7
### a)
    SELECT COUNT(*) from Movie WHERE rating > 7.5

### b)
    SELECT AVG(rating) from Movie

### c)
    SELECT COUNT(*) from Movie WHERE playing_limit_date > "2022-08-23"

### d) 
    SELECT COUNT(*) from Movie WHERE release_date > "2022-08-23"

### e)
    SELECT MAX(rating) from Movie

### f)
    SELECT MIN(rating) from Movie   

## Exercício 8
### a)
    SELECT * FROM Movie ORDER BY name ASC

### b)
    SELECT * FROM Movie ORDER BY name DESC
    LIMIT 5

### c)
    SELECT * FROM Movie
    ORDER BY release_date DESC
    WHERE playing_limit_date < "2022-08-23"

### d)
    SELECT * FROM Movie ORDER BY rating DESC
    LIMIT 3

