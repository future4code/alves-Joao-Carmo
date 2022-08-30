## Exercício 1
### a)
- CREATE TABLE: cria uma tabela, recebendo nome, nomes e tipos de cada coluna, indicando suas restrições.
- VARCHAR(n): declara uma string com no máximo "n" caracteres.
- DATE: declara uma data

### b)
- SHOW DATABASES: mostra as databases existentes no workbench.
- SHOW TABLES: mostra as tabeals existentes no workbench.

### c)
O comando describe mostra a estrutura da tabela.

## Exercício 2
### a)
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "female"
    );

### b)
"Erro de código 1062. Entrada '002' duplicada para chave PRIMARY KEY. O erro ocorre pois a PK deve ser única para cada elemento da tabela, ou seja, não podem haver duas PKs iguais numa mesma tabela.

### c)
A quantidade de colunas é diferente da quantidade da linha 1.(faltaram alguns parâmetros)

### d)
O campo 'name' não tem um valor padrão definido, portanto não pode estar vazio.

### e)
Valor de dado incorreto. A data não foi passada como DATA.

## Exercício 3
### a)
    SELECT * from Actor WHERE gender = "female"

### b)
    SELECT salary from Actor WHERE name = "Tony Ramos"

### c)
    SELECT * from Actor WHERE gender = "invalid"

Nenhum resultado foi retornado, pos todos os generos estão definidos.

### d)
    SELECT id, name, salary from Actor WHERE salary < 500000

### e)
"nome" está escrito errado, o correto nessa tabela é "name" como definido na sua criação.

    SELECT id, name from Actor WHERE id = "002"


## Exercício 4
### a)
A query irá buscar por atores cujos nomes comecem com a letra A ou J e ganhem menos de 300000 reais.

### b) 
    SELECT * FROM Actor
    WHERE name NOT LIKE "A%" AND salary > 350000

### c)
    SELECT * FROM Actor
    WHERE name LIKE "%G%" OR "%g%"

### d)
    SELECT * FROM Actor
    WHERE name LIKE "%G%" OR "%g%" OR name LIKE "%A%" OR "%a%" AND salary BETWEEN 350000 AND 900000

## Exercício 5
### a)
    CREATE TABLE Filmes (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL,
        sinopse TEXT NOT NULL,
        data_de_lançamento DATE NOT NULL,
        avaliacao INT NOT NULL
    );

id e nome são strings com no máximo 255 caracteres. Sinopse pode armazenar uma string maior com o TEXT. Data de lançamento é uma data e avaliacao INT para números inteiros.

### b)
    INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliacao)
        VALUES(
        "001", 
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006-01-06", 
        7
        );

### c)
    INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliacao)
        VALUES(
        "002", 
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27", 
        10
        );

### d)
    INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliacao)
        VALUES(
        "003", 
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02", 
        8
        );

### e)
    INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliacao)
        VALUES(
        "004", 
        "Tropa de Elite",
        "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar.",
        "2007-10-05", 
        9
        );

## Exercício 6
### a)  
    SELECT id, nome, avaliacao from Filmes WHERE id = "001"

### b)
    SELECT * from Filmes WHERE nome = "Tropa de Elite"

### c)
    SELECT id, nome, sinopse from Filmes WHERE avaliacao > 7

## Exercício 7
### a)
    SELECT * from Filmes WHERE nome LIKE "%vida%"

### b)
    SELECT * from Filmes WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%"

### c)
    SELECT * from Filmes WHERE data_de_lançamento < "2022-08-22"

### d)
    SELECT * from Filmes WHERE data_de_lançamento < "2022-08-22" AND nome LIKE "%vida%" OR avaliacao > 7
