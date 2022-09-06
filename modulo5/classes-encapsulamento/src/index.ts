// Exercício 1
// a) o construtor irá recerber os parametros para cosntruir um objeto da tal classe. 
// podemos chamá-lo com a keyword new.

// b) 

// Exercício 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    }

    // getters
    public getDescription(): string {
        return this.description
    }
    public getValue(): number {
        return this.value
    }
    public getDate(): string {
        return this.date
    }

}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    // getters
    public getName(): string {
        return this.name
    }
    public getCpf(): string {
        return this.cpf
    }
    public getAge(): number {
        return this.age
    }

    // setters
    public addTransaction(transaction: Transaction) {
        this.transactions.push(transaction)
    }

}

const user1 = new UserAccount("1234", "random", 22)
const transaction1 = new Transaction("first", 33, "05/09")
user1.addTransaction(transaction1)
console.log(user1)

// a mensagem aparece uma única vez

// c) acessamos as propriedades privadas das classes com getters e setters.

// Exercício 3

class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
    
}
